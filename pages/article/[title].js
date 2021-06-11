import React, { useEffect } from "react";
import { getArticles } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={okaidia} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className} {...props} />
        )
    }
}

export default function Article(props) {
    let { title, body } = props;
    console.log(props, "article")
    return (
        <div>
            <h2>{title}</h2>
            <ReactMarkdown
                components={components}
            >
                {body}
            </ReactMarkdown>
        </div>
    )
}


export async function getStaticPaths() {
    let data = await getArticles();
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
}

export async function getStaticProps({ params }) {
    let title = params.title;
    let data = await getArticles();
    let props = data.find(article => article.title === title)
    return {
        props,
    }
}