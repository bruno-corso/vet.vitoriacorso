import MenuLinks from "Componentes/MenuLink";
import styles from "./Menu.module.css"
import { BsFlower1 } from 'react-icons/bs'

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <BsFlower1 className={styles.icon} color="white" size={30}/>
                <MenuLinks to='/'>
                    Início
                </MenuLinks>
                <MenuLinks to='/sobremim'>
                    Sobre Mim
                </MenuLinks>
                <MenuLinks to='/contato'>
                    Contato
                </MenuLinks>
            </nav>
        </header>
    );
}
 
export default Menu;  