import { NextSeo } from 'next-seo'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import Sidebar from '../../components/home/Sidebar'
import styles from '../../styles/article.module.scss'
import { getArticles } from '../../utils/api'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ArticlePageProps } from '../../types/PageProps'
import { Issue } from '../../types/Article'

export default function Article(props: ArticlePageProps) {
    const { body, tags, url } = props

    return (
        <>
            <NextSeo
                title={'暮天云光-' + props.title}
                description={props.description}
                additionalMetaTags={[
                    {
                        // property: 'keywords',
                        name: 'keywords',
                        content: Array.isArray(props.keywords) ? props.keywords.join(',') : '',
                    },
                ]}
            />
            <article>
                <div className="container">
                    <div className="column">
                        <div className="content">
                            <div className={styles.article}>
                                <ReactMarkdown
                                    components={{
                                        code({ inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    style={materialOceanic}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    // children={}
                                                    // {...props}
                                                >
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props} />
                                            )
                                        },
                                    }}
                                    rehypePlugins={[rehypeRaw]}
                                >
                                    {body}
                                </ReactMarkdown>
                                <hr />
                            </div>
                            <strong className={styles.remark}>
                                <a href={url}>在github上参与本文讨论</a>
                            </strong>
                            <Sidebar tags={tags} />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { issues } = await getArticles()
    return {
        paths: issues.map(article => {
            return {
                params: {
                    id: article.id,
                },
            }
        }),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({ params }) => {
    const id = params?.id
    const { issues } = await getArticles()
    const props = issues?.find(article => article.id === id) as Issue
    return {
        props: {
            ...props,
            headType: 'article',
        },
    }
}
