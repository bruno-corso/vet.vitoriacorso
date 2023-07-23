import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLinks = ({to, children}) => {
    return ( 
        <NavLink 
            to={to}
            className={({isActive})=> 
            isActive ? `${styles.link_destacado} ${styles.link}` : styles.link 
        }
        >
            {children}
        </NavLink>
    );
}
 
export default MenuLinks;