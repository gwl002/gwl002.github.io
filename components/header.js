import React from 'react';
import styles from "../styles/header.module.scss";
import Link from "next/link";
import moment from "dayjs";

export default function Header(props) {
    const { headType, tags, createdAt } = props;
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="column">
                    <div className="content">
                        {
                            headType === "article" ? (
                                <div className={styles.articleHeading}>
                                    <div className={styles.tags}>
                                        {tags.map(tag => {
                                            return (
                                                <Link href={`/tag#${tag}`} key={tag} >
                                                    {tag}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <h1 className={styles.title}>{props.title}</h1>
                                    <span className={styles.meta}>
                                        Posted by gwl002 on {moment(createdAt).format("YYYY-MM-DD")}
                                    </span>
                                </div>
                            ) : (
                                <div className={styles.siteHeading}>
                                    <h1 className={styles.title}>{props.title}</h1>
                                    <span className={styles.subTitle}>{props.subTitle}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

