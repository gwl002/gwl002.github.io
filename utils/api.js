const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;
const fm = require('front-matter');

const token = process.env.API_TOKEN

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
                    labels(first: 10){
                        edges {
                            node {
                                name,
                                color
                            }
                        }
                    }
                    issues(first: 100, orderBy: {field: CREATED_AT, direction: DESC}, states: [OPEN], filterBy: {createdBy: "gwl002" }) {
                        edges {
                            node {
                                title
                                body
                                createdAt
                                url
                                labels(first: 100) {
                                    edges {
                                        node {
                                            name,
                                            color
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
        const issues = result.repository.issues.edges.map((em) => {
            const { title, body, createdAt, url, labels } = em.node;
            const tags = labels.edges.map(em => em.node.name);
            let json = fm(body); //提取front-matter 信息 {attributes,body}
            return {
                title,
                body: json.body,
                url,
                createdAt,
                tags,
                ...json.attributes
            }
        })
        const tags = result.repository.labels.edges.map((em) => {
            let { name, color } = em.node;
            return {
                name,
                color
            };
        })
        console.log(issues, "===")
        return {
            issues,
            tags
        }

    } catch (err) {
        console.log(err);
        return []
    }
}




