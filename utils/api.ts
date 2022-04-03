import fm from 'front-matter'
import md5 from 'md5'
const token = process.env.API_TOKEN
import { graphql } from '@octokit/graphql'
import { Repository } from '@octokit/graphql-schema'
import { Issue, Tag, SeoProps } from '../types/Article'

export async function getArticles() {
    try {
        const result = await graphql<{ repository: Repository }>(
            `
                {
                    repository(owner: "gwl002", name: "gwl002.github.io") {
                        labels(first: 100) {
                            edges {
                                node {
                                    name
                                    color
                                }
                            }
                        }
                        issues(
                            first: 100
                            orderBy: { field: CREATED_AT, direction: DESC }
                            states: [OPEN]
                            filterBy: { createdBy: "gwl002" }
                        ) {
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
            `,
            {
                headers: {
                    authorization: `bearer ${token}`,
                },
            }
        )
        const issues: Issue[] =
            result?.repository?.issues?.edges?.map(em => {
                const { title, body = '', createdAt, url, labels } = em?.node || {}
                const tags: Tag[] =
                    labels?.edges?.map(em => {
                        return { name: em?.node?.name, color: em?.node?.color }
                    }) || []
                const json = fm<SeoProps>(body) //提取front-matter 信息 {attributes,body}
                const id = md5(title + '-' + createdAt)
                const content: string = json.body
                const attributes: SeoProps = json.attributes

                return {
                    id,
                    title,
                    body: content,
                    url: url as string,
                    createdAt: createdAt as string,
                    tags,
                    ...attributes,
                }
            }) || []

        const tags: Tag[] =
            result?.repository?.labels?.edges?.map(em => {
                const { name, color } = em?.node || {}
                return {
                    name,
                    color,
                }
            }) || []

        return {
            issues,
            tags,
        }
    } catch (err) {
        console.log(err)
        return {
            issues: [],
            tags: [],
        }
    }
}
