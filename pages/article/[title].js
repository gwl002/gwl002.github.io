import React, { useEffect } from "react";
import { getArticles } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../../styles/article.module.scss";

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
    let { body } = props;
    return (
        <article>
            <div className="container">
                <div className="column">
                    <div className="content">
                        <div className={styles.article}>
                            <ReactMarkdown
                                components={components}
                            >
                                {body}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div >
        </article>
    )
}


export async function getStaticPaths() {
    let { issues } = await getArticles();
    return {
        paths: issues.map(article => {
            return {
                params: {
                    title: article.title
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let title = params.title;
    let { issues } = await getArticles();
    let props = issues.find(article => article.title === title)
    return {
        props: {
            ...props,
            headType: "article"
        }
    }
}