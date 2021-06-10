
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { getArticles } from "../utils/api";
import PostList from "../components/home/PostList";
import Sidebar from "../components/home/Sidebar";

export default function HomePage(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <PostList list={props.list} />
                    <Sidebar />
                </div>
            </div>
        </>
    )
}


export async function getStaticProps({ params }) {
    let reuslt = await getArticles();
    return {
        props: {
            list: reuslt.map(article => {
                return {
                    title: article.title,
                    url: "/article/" + article.title,
                    ...article
                }
            }),
            title: "暮天云光",
            subTitle: "工作经验、学习笔记、兴趣爱好"
        },
    }
}