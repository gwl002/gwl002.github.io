import React, { useEffect } from "react";
import { getArticles } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../../styles/article.module.scss";
import Sidebar from "../../components/home/Sidebar";
import { NextSeo } from 'next-seo';

const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={materialOceanic} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className} {...props} />
        )
    }
}

export default function Article(props) {
    let { body, tags, url } = props;
    tags = tags.map(tag => {
        return {
            name: tag
        }
    })
    return (
        <>
            <NextSeo
                title={"暮天云光-" + props.title}
                description={props.description}
                additionalMetaTags={
                    [
                        {
                            property: 'keywords',
                            name: 'keywords',
                            content: Array.isArray(props.keywords) ? props.keywords.join(",") : ""
                        }
                    ]
                }
            />
            <article>
                <div className="container">
                    <div className="column">
                        <div className="content">
                            <div className={styles.article}>
                                <ReactMarkdown
                                    components={components}
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
                </div >
            </article>
        </>
    )
}


export async function getStaticPaths() {
    let { issues } = await getArticles();
    return {
        paths: issues.map(article => {
            return {
                params: {
                    id: article.id
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let id = params.id;
    let { issues } = await getArticles();
    let props = issues.find(article => article.id === id)
    return {
        props: {
            ...props,
            headType: "article"
        }
    }
}