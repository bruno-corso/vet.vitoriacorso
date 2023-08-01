import './Post.css'
import PostModelo from "Componentes/PostModelo";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import postagens from 'json/posts.json'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import * as Scroll from 'react-scroll';


const Post = () => {

    const paramentros = useParams()

    const post = postagens.find((post) => {
        return post.id === Number(paramentros.id)
    })

    const navigate = useNavigate();

    const scroller = Scroll.scroller

    function rolarPaginaInicio() {
        scroller.scrollTo('menu', {
            duration: 750,
            delay: 0,
            smooth: true,
            offset: 0
        });
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

            <button className="botao" onClick={rolarPaginaInicio}>← Voltar</button>

        </PostModelo>
    );
}

export default Post;