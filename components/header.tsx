import React from 'react'
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import moment from 'dayjs'
import { HeaderProps } from '../types/HeaderProps'

const Header = (props: HeaderProps) => {
    const { headType, tags, createdAt, title, subTitle } = props
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="column">
                    <div className="content">
                        {headType === 'article' ? (
                            <div className={styles.articleHeading}>
                                <div className={styles.tags}>
                                    {tags.map(tag => {
                                        return (
                                            <Link href={`/tag#${tag.name}`} key={tag.name}>
                                                <a>{tag.name}</a>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <h1 className={styles.title}>{props.title}</h1>
                                <span className={styles.meta}>
                                    Posted by gwl002 on {moment(createdAt).format('YYYY-MM-DD')}
                                </span>
                            </div>
                        ) : (
                            <div className={styles.siteHeading}>
                                <h1 className={styles.title}>{title}</h1>
                                <span className={styles.subTitle}>{subTitle}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header