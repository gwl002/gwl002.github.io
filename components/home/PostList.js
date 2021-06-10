import PostItem from "./PostItem";
import styles from "../../styles/home.module.scss";


export default function PostList(props) {
    let { list } = props;
    return (
        <ul className={styles.postList}>
            {list.map(item => {
                return (
                    <PostItem {...item} key={item.title} />
                )
            })}
        </ul>
    )
}