import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                 </li>
                <li>
                    <Link href="/products">
                        <a>Produtos</a>
                    </Link>
                 </li>
                <li>
                    <Link href="/about">
                        <a>Sobre nós</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contato</a>
                    </Link>
                </li>
                <li>
                    <Link href="/todos">
                        <a>To-do List</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}