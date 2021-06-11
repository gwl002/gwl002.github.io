import Link from "next/link";
import styles from "../../styles/home.module.scss";
import removeMarkdown from "markdown-to-text";
import moment from "dayjs";

export default function PostItem(props) {
    let { title, subTitle, body, createdAt } = props;
    const url = "/article/" + encodeURIComponent(title);
    const desc = removeMarkdown(body).substring(0, 400);

    return (
        <>
            <li className={styles.postItem} >
                <Link
                    // href={url}
                    href={{
                        pathname: '/article/[title]',
                        query: { title: title },
                    }}
                >
                    <a >
                        <h2 className={styles.postTitle}>
                            {title}
                        </h2>
                        <h3 className={styles.subPostTitle}>
                            {subTitle}
                        </h3>
                        <div className={styles.postContentPreview}>
                            {desc.length >= 400 ? desc + "......" : desc}
                        </div>
                    </a>
                </Link>
                <p className={styles.postMeta}>Posted by gwl002 on {moment(createdAt).format("YYYY-MM-DD")}</p>
            </li>
            <hr />
        </>
    )
}