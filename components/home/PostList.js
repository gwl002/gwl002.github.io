import styles from "../../styles/home.module.scss";
import PostItem from "./PostItem";


export default function PostList(props) {
    let { list } = props;
    return (
        <ul className={styles.postList}>
            {list.map(item => {
                return (
                    <PostItem {...item} key={item.id} />
                )
            })}
        </ul>
    )
}