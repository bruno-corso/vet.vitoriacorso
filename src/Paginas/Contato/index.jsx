import styles from './Contato.module.css'
import foto from './contato.PNG'
import * as Scroll from 'react-scroll';

const Contato = () => {

    const scroller = Scroll.scroller

    function rolarPagina() {
        scroller.scrollTo('contato', {
            duration: 750,
            delay: 100,
            smooth: true,
            offset: 0
        });
    }

    return (
        <div className={styles.contato} onLoad={rolarPagina} name='contato'>
            <img className={styles.foto} src={foto} alt="imagem da faixada da clínica" />
            <div className={styles.info}>
                <p>LOCAL: Rua Criastino Angeli, 901</p>
                <p>TELEFONE: (11) 95461-6083 </p>
                <p>HORÁRIO: Seg. à Sex. - 8h00 até 18h00</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.1874436476452!2d-46.572612230434494!3d-23.72062817086258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4160ddfcbbdb%3A0xd83e4874e5aed8f7!2sR.%20Cristiano%20Angeli%2C%20901%20-%20Assun%C3%A7%C3%A3o%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009810-555!5e0!3m2!1spt-BR!2sbr!4v1690849649345!5m2!1spt-BR!2sbr" className={styles.mapa} ></iframe>
        </div>
    );
}

export default Contato;