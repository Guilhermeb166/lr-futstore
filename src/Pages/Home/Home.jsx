import Carousel from './Carousel/Carousel'
import styles from './Home.module.css'

export default function Home(){
    return(
        <main className={styles.home}>
            <Carousel/>
        </main>
    )
}