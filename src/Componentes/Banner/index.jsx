import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo.png'
import fotoVitoria from 'assets/vitoria.png'
import ReactWhatsapp from 'react-whatsapp';

const Banner = () => {

    const msgZap = "Olá, tudo bom? Gostaria de falar sobre meu pet!"

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Está tudo bem com o seu pet?</h1>

                <p className={styles.paragrafo}>Vitória Corso</p>
                <p className={styles.paragrafo}>Médica Veterinária • CRMV 48022SP</p>
                <p className={styles.paragrafo}>Cirurgiã e Endoscopista</p>
                <p className={styles.paragrafo}>Clínica Veterinária e Volante</p>
                <ReactWhatsapp
                    number='+5511970591232'
                    className={styles.zapzap}
                    message={msgZap}
                >
                    Agende uma consulta →
                </ReactWhatsapp>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} className={styles.circuloColorido} aria-hidden={true} />
                <img src={fotoVitoria} className={styles.fotoVitoria} />
            </div>

        </div>
    );
}

export default Banner;