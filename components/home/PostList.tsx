import styles from '../../styles/home.module.scss'
import PostItem from './PostItem'
import { Issue } from '../../types/Article'

export default function PostList(props: { list: Issue[] | undefined }) {
    const { list } = props
    return (
        <ul className={styles.postList}>
            {list?.map(item => {
                return <PostItem {...item} key={item.id} />
            })}
        </ul>
    )
}
