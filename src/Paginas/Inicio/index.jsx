import styles from "./Inicio.module.css"
import postagens from 'json/posts.json'
import PostCard from "Componentes/PostCard";

const Inicio = () => {

    console.log(postagens)
    return (
        <ul className={styles.posts}>
            {postagens.map((post) => (
                <li className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}

export default Inicio;