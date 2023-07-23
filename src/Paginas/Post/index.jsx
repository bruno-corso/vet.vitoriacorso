import './Post.css'
import PostModelo from "Componentes/PostModelo";
import { useParams } from "react-router";
import postagens from 'json/posts.json'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Post = () => {

    const paramentros = useParams()

    const post = postagens.find((post) => {
        return post.id === Number(paramentros.id)
    })

    return (
        <PostModelo
            titulo={post.titulo}
            fotoCapa={post.imagem}>

            <div className=" post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div> 

        </PostModelo>
    );
}

export default Post;