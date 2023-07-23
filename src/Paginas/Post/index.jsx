import './Post.css'
import PostModelo from "Componentes/PostModelo";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import postagens from 'json/posts.json'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Post = () => {

    const paramentros = useParams()

    const post = postagens.find((post) => {
        return post.id === Number(paramentros.id)
    })

    const navigate = useNavigate();

    function retornarInicio() {
        navigate(-1);
    }

    return (
        <PostModelo
            titulo={post.titulo}
            fotoCapa={post.imagem}>

            <div className=" post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>

            <button className="botao" onClick={retornarInicio}>← Voltar</button>

        </PostModelo>
    );
}

export default Post;