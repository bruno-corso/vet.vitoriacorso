import { Link } from "react-router-dom";
import styles from "./PostCard.module.css"

const PostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <div className={styles.img} style={{ backgroundImage: `url(${post.imagem})` }}></div>
                <div className={styles.txt}>
                    <h2>{post.titulo}</h2>
                    <span>{post.previa}</span>
                </div>
            </div>
        </Link>

    );
}

export default PostCard;