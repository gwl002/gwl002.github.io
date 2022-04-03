import cn from 'classnames'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/tag.module.scss'
import { IndexPageProps } from '../types/PageProps'
import { getArticles } from '../utils/api'
import { Issue, Tag } from '../types/Article'

export default function HomePage(props: IndexPageProps) {
    const { tags, list } = props
    const groups = tags?.map(tag => {
        const posts = list?.filter(item => item.tags.some(TAG => TAG.name === tag.name))
        return {
            tag,
            posts,
        }
    })
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <div className={styles.tagPage}>
                        <ul className={styles.tags}>
                            {tags?.map((tag, index) => {
                                return (
                                    <li key={tag.name} className={styles.tag}>
                                        <a href={'#' + tag.name} style={{ backgroundColor: `#${tag.color}` }}>
                                            {tag.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            {groups?.map(group => {
                                return <GroupByTag tag={group.tag} posts={group.posts} key={group.tag.name} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GroupByTag = ({ tag, posts }: { tag: Tag; posts: Issue[] }) => {
    if (posts.length === 0) return null
    return (
        <li>
            <span className={cn('fa', 'fa-tag', styles.tagIcon)} id={tag.name}>
                <span className={styles.tagText}>{tag.name}</span>
            </span>
            <ul className={styles.postList}>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href={'/article/' + post.id}>
                                <a>
                                    <h2>{post.title}</h2>
                                </a>
                            </Link>
                            <hr />
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async ({ params }) => {
    const result = await getArticles()
    return {
        props: {
            list: result.issues,
            tags: result.tags,
            title: '标签',
            subTitle: '把文章按标签整理分类',
        },
    }
}
