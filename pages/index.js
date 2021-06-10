import Head from 'next/head'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Link from "next/link"
import { getArticles } from "../utils/api";

export default function HomePage(props) {
    return (
        <>
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
            }),
            title: "暮天云光",
            subTitle: "工作经验、学习笔记、兴趣爱好"
        },
    }
}