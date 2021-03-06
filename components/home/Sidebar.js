import Link from "next/link";
import styles from "../../styles/home.module.scss";

export default function SideBar(props) {
    const { tags } = props;
    return (
        <div className={styles.sidebar}>
            <section>
                <h5>
                    <Link href="/tags">FEATURED TAGS</Link>
                </h5>
                <ul className={styles.tags}>
                    {
                        tags.map((tag, index) => {
                            return (
                                <Tag tag={tag} key={tag.name} />
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

const Tag = ({ tag }) => {
    return (
        <li className={styles.tag}>
            <Link href={`/tag#${tag.name}`}>{tag.name}</Link>
        </li>
    )
}