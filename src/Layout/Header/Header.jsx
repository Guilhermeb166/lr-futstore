import styles from './Header.module.css'
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { IoPerson,IoClose  } from "react-icons/io5";

export default function Header(){
    const [menuOpen,setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth <= 600);
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
            {isMobile && ( <button className={styles.menuButton} onClick={()=> setMenuOpen(!menuOpen)}>
                {menuOpen ? '': <FaBars/>}
            </button> )}
            {/*Menu lateral */}
            {isMobile &&(
            <nav className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}>
                <IoClose className={styles.closeMenu} onClick={()=> setMenuOpen(!menuOpen)}/>
                <ul className={styles.linksMobile}>
                    <li>Home</li>
                    <li>Fale Conosco</li>
                    <li>Tailandesas</li>
                    <li>Retrôs</li>
                    <li><FaShoppingCart /> Carrinho</li>
                    <li><IoPerson /> Minha Conta</li>
                </ul>

            </nav>)}
             {/* Mostra a lista normal em telas maiores que 600px */}
             {!isMobile && (
                <ul className={styles.links}>
                    <li>Home</li>
                    <li>Fale Conosco</li>
                    <li className={styles.iconsLink}><FaShoppingCart /></li>
                    <li className={styles.iconsLink}><IoPerson /></li>
                </ul>
            )}
            
        </header>
    )
}