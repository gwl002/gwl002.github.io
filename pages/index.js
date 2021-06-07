import Head from 'next/head'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"
import { getArticles } from "../utils/api";

export default function HomePage(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">关于</Link>
                    </li>
                    <li>
                        <Link href="/game">小游戏</Link>
                    </li>
                    <li>
                        <Link href="/archives">归档</Link>
                    </li>
                    <li>
                        <Link href="/tag">标签</Link>
                    </li>
                </ul>
            </nav>
            <div>
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
        </>
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