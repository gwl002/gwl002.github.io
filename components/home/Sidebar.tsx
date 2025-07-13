import Link from 'next/link'
import styles from '../../styles/home.module.scss'
import { Tag } from '../../types/Article'

export default function SideBar(props: { tags: Tag[] | undefined }) {
    const { tags } = props
    return (
        <div className={styles.sidebar}>
            <section>
                <h5>
                    <Link href="/tags" >FEATURED TAGS</Link>
                </h5>
                <ul className={styles.tags}>
                    {tags?.map((tag, index) => {
                        return <TagItem tag={tag} key={tag.name} />
                    })}
                </ul>
            </section>
        </div>
    )
}

const TagItem = (props: { tag: Tag }) => {
    const { tag } = props
    return (
        <li className={styles.tag}>
            <Link href={`/tag#${tag.name}`} >{tag.name}</Link>
        </li>
    )
}