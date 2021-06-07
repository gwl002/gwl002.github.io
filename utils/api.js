const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const token = process.env.API_TOKEN || "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";


//issue api copy from https://github.com/gwuhaolin/blog/blob/master/gen.js 
const client = new Lokka({
    transport: new Transport('https://api.github.com/graphql', {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
});


export async function getArticles(title) {
    try {
        let result = await client.query(`
            {
                repository(owner: "gwl002", name: "gwl002.github.io") {
                    issues(first: 1, orderBy: {field: CREATED_AT, direction: ASC}, states: [OPEN], filterBy: {createdBy: "gwl002" }) {
                        edges {
                            node {
                                title
                                body
                                createdAt
                                url
                                labels(first: 100) {
                                    edges {
                                        node {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                        totalCount
                    }
                }
            }
        `)
        return result.repository.issues.edges.map((em) => {
            const { title, body, createdAt, url, labels } = em.node;
            const tags = labels.edges.map(em => em.node.name);
            return {
                title,
                body,
                url,
                createdAt,
                tags
            }
        })
    } catch (err) {
        console.log(err);
        return []
    }
}


function getAllData() {
    let data = null;
    return {
        getStaticPaths: async function () {
            if (!data) {
                data = await getArticles();
            }
            console.log(data, "====")
            return {
                paths: data.map(article => {
                    return {
                        params: {
                            title: article.title
                        }
                    }
                }),
                fallback: false
            }
        },
        getStaticProps: async function ({ params }) {
            let title = params.title;
            if (!data) {
                data = await getArticles();
            }
            let props = data.find(article => article.title === title)
            return {
                props,
            }
        }
    }
}


export default getAllData
