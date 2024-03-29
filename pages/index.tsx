import React from 'react'
import PostList from '../components/home/PostList'
import Sidebar from '../components/home/Sidebar'
import { getArticles } from '../utils/api'
import { GetStaticProps } from 'next'
import { IndexPageProps } from '../types/PageProps'

export default function HomePage(props: IndexPageProps) {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="row">
                        <PostList list={props.list} />
                        <Sidebar tags={props.tags} />
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async ({}) => {
    const result = await getArticles()
    return {
        props: {
            list: result.issues,
            tags: result.tags,
            title: '暮天云光',
            subTitle: '工作经验、学习笔记、兴趣爱好',
        },
    }
}
