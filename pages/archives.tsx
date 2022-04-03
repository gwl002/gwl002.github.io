import React, { useState, useEffect, useCallback, useContext } from 'react'
import styles from '../styles/archives.module.scss'
import { getArticles } from '../utils/api'
import Link from 'next/link'
import moment from 'dayjs'
import cn from 'classnames'
import { ArchivePageProps } from '../types/PageProps'
import { GetStaticProps } from 'next'
import { Issue } from '../types/Article'

export default function Archives(props: ArchivePageProps) {
    const { list } = props
    const groups =
        list?.reduce((acc, item) => {
            const year = new Date(item.createdAt).getFullYear()
            let group = acc.find(obj => obj.year === year)
            if (group) {
                group.posts.push(item)
            } else {
                group = {
                    year,
                    posts: [item],
                }
                acc.push(group)
            }
            return acc
        }, [] as { year: number; posts: Issue[] }[]) || []
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <div className={styles.archivePage}>
                        <ul>
                            {groups.map(group => {
                                return <GroupByYear year={group.year} posts={group.posts} key={group.year} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GroupByYear = ({ year, posts }: { year: number; posts: Issue[] }) => {
    return (
        <li className={styles.groupItem}>
            <span className={cn('fa', 'fa-calendar-times-o', styles.yearIcon)}>
                <span className={styles.yearText}>{year}</span>
            </span>
            <ul className={styles.postList}>
                {posts.map(post => {
                    const month = moment(post.createdAt).format('MM-DD')
                    return (
                        <li key={post.id}>
                            <span>{month}</span>
                            &nbsp;
                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            &nbsp;
                            <Link href={'/article/' + post.id}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export const getStaticProps: GetStaticProps<ArchivePageProps> = async ({ params }) => {
    const result = await getArticles()
    return {
        props: {
            list: result.issues,
            title: '归档',
            subTitle: '历年的文章',
        },
    }
}
