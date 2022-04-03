import Link from 'next/link'
import styles from '../../styles/home.module.scss'
import removeMarkdown from 'markdown-to-text'
import moment from 'dayjs'
import { Issue } from '../../types/Article'

export default function PostItem(props: Issue) {
    const { id, title, body, createdAt } = props
    // const url = "/article/" + encodeURIComponent(title);
    const desc = removeMarkdown(body as string).substring(0, 150)

    return (
        <>
            <li className={styles.postItem}>
                <Link
                    // href={url}
                    href={{
                        pathname: '/article/[id]',
                        query: { id },
                    }}
                >
                    <a>
                        <h2 className={styles.postTitle}>{title}</h2>
                        <div className={styles.postContentPreview}>{desc.length >= 150 ? desc + '......' : desc}</div>
                    </a>
                </Link>
                <p className={styles.postMeta}>Posted by gwl002 on {moment(createdAt).format('YYYY-MM-DD')}</p>
            </li>
            <hr />
        </>
    )
}
