import styles from './Header.module.css'
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoPerson,IoClose  } from "react-icons/io5";

export default function Header(){
    const [menuOpen,setMenuOpen] = useState(false)

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth>600){
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])
    return(
        <header>
            <img src="./img/Picsart_25-03-21_14-56-48-912.png" alt="" className={styles.logo}/>
            {/*Ícone do menu hamburguer */}
            <button className={styles.menuButton} onClick={()=> setMenuOpen(!menuOpen)}>
                {menuOpen ? '': <FaBars/>}
            </button>
            {/*Menu lateral */}
            <nav className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}>
                <IoClose className={styles.closeMenu} onClick={()=> setMenuOpen(!menuOpen)}/>
                <ul className={styles.links}>
                    <li>Home</li>
                    <li>Fale Conosco</li>
                    <li>Tailandesas</li>
                    <li>Retrôs</li>
                    <li><FaShoppingCart /> Carrinho</li>
                    <li><IoPerson /> Minha Conta</li>
                </ul>

            </nav>
            
        </header>
    )
}