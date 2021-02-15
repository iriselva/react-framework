import Link from 'next/link'
import styles from '../styles/Home.module.css'


function Header() {
    return (
        <div>
            <h1 className={styles.title}>My portfolio</h1>
            <p className={styles.description}>
                Hi! My name is Iris, I am a web development student and welcome to my mini portfolio
            </p>
            <div>{/* navigation */}
                <ul>
                    <li>
                        <h2>
                            <Link href="/">
                            <a>Projects</a>
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <Link href="/about">
                            <a>About me</a>
                            </Link>
                        </h2>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Header