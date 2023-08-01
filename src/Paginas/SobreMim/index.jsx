import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SobreMim.module.css'
import foto from './sobre_mim.jpg'
import * as Scroll from 'react-scroll';

const SobreMim = () => {

    const navigate = useNavigate();

    // function retornarInicio() {
    //     navigate(-1);
    // }

    const scroller = Scroll.scroller

    function rolarPagina() {
        scroller.scrollTo('sobremim', {
            duration: 750,
            delay: 100,
            smooth: true,
            offset: 0
        });
    }

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
        <>
            <div className={styles.SobreMim} onLoad={rolarPagina} name="sobremim" >
                <img className={styles.foto} src={foto} />
                <div className={styles.textos}>
                    <p className={styles.paragrafo}>Eu sou uma veterinária dedicada e apaixonada por animais, com uma vasta experiência em cirurgia e endoscopia para pets. Desde criança, sempre soube que queria trabalhar com animais e transformei essa paixão em minha carreira. Com muitos anos de prática clínica, desenvolvi habilidades cirúrgicas precisas e uma abordagem cuidadosa para garantir o bem-estar e a segurança dos meus pacientes peludos.</p>

                    <p className={styles.paragrafo}>Após anos de dedicação e experiência na área veterinária, decidi dar um passo ainda maior em minha carreira. Com muito orgulho e determinação, abri minha própria clínica veterinária. Essa decisão foi motivada pela vontade de oferecer um espaço acolhedor e personalizado para cuidar dos animais da comunidade com excelência e amor.</p>

                    <p className={styles.paragrafo}>Minha clínica é fruto de um sonho que venho cultivando ao longo dos anos, e cada detalhe foi planejado com carinho para proporcionar o melhor atendimento aos nossos pacientes e seus tutores. Além de contar com a experiência em cirurgia e endoscopia, na nossa clínica também oferecemos serviços de prevenção, diagnóstico e tratamento para diversas outras necessidades de saúde dos animais. Acredito que a prevenção é essencial para a promoção do bem-estar animal, e nosso objetivo é orientar e trabalhar em parceria com os tutores para garantir que seus animais tenham uma vida longa e saudável.</p>

                    <p className={styles.paragrafo}>Estou extremamente grata pela oportunidade de realizar meu sonho de ter minha própria clínica e de seguir contribuindo para o cuidado e felicidade dos pets. Minha jornada como veterinária e empresária é desafiadora, mas é recompensador saber que estou fazendo a diferença na vida dos animais que tanto amo. A clínica é um espaço onde meus valores profissionais e amor pelos animais se unem para oferecer o melhor para os nossos pacientes peludos. O compromisso de proporcionar cuidados excepcionais e o carinho pela profissão me impulsionam a seguir em frente, tornando minha clínica um lugar onde animais e seus tutores se sentem acolhidos e confiantes no tratamento oferecido.</p>
                </div>
            </div>
            <button className={styles.botao} onClick={rolarPaginaInicio} >← Voltar</button>
        </>

    );
}

export default SobreMim;