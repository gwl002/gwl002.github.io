import React from 'react';
import { getArticles } from "../utils/api";
import Link from "next/link";
import styles from "../styles/tag.module.scss";
import cn from "classnames";

export default function HomePage(props) {
    const { tags, list } = props;
    const groups = tags.map(tag => {
        let posts = list.filter(item => item.tags.includes(tag.name));
        return {
            tag,
            posts
        }
    })
    return (
        <div className="container">
            <div className="column">
                <div className="content">
                    <div className={styles.tagPage}>
                        <ul className={styles.tags}>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <li key={tag.name} className={styles.tag}>
                                            <a href={"#" + tag.name} style={{ backgroundColor: `#${tag.color}` }}>{tag.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul>
                            {
                                groups.map((group) => {
                                    return (
                                        <GroupByTag
                                            tag={group.tag}
                                            posts={group.posts}
                                            key={group.tag.name}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GroupByTag = ({ tag, posts }) => {
    if (posts.length === 0) return null
    return (
        <li>
            <span className={cn("fa", "fa-tag", styles.tagIcon)} id={tag.name}>
                <span className={styles.tagText}>{tag.name}</span>
            </span>
            <ul className={styles.postList}>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href={"/article/" + post.id}>
                                <a>
                                    <h2>
                                        {post.title}
                                    </h2>
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


export async function getStaticProps({ params }) {
    let result = await getArticles();

    return {
        props: {
            list: result.issues,
            tags: result.tags,
            title: "标签",
            subTitle: "把文章按标签整理分类"
        },
    }
}