import Head from 'next/head'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"
import { getArticles } from "../utils/api";

export default function HomePage(props) {
    return (
        <div>
            <h2>gwl002.github.io</h2>
            <Link href="/greedySnake">贪吃蛇小游戏</Link>
            <a href="https://www.baidu.com">百度一下，你就知道</a>
            <a href="https://www.google.com">google</a>
            <ul>
                {
                    props.urls.map(({ url, title }) => {
                        return (
                            <li key={url} >
                                <a href={url}>{title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export async function getStaticProps({ params }) {
    let reuslt = await getArticles();
    return {
        props: {
            urls: reuslt.map(article => {
                return {
                    title: article.title,
                    url: "/article/" + article.title
                }
            })
        },
    }
}