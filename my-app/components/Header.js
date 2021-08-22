import styles from "../styles/Home.module.css";
import ActiveLink from "./ActiveLink";

function Header() {
  return (
    <div>
      <h1 className={styles.title}>WebDev portfolio</h1>
      <p className={styles.description}>
        Hi! My name is Iris, I am a web development student and welcome to my
        mini portfolio
      </p>
      <div>
        {/* navigation */}
        <ul className={styles.navigation}>
          <li>
            <ActiveLink href="/">
              <p>Projects</p>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/collaboration">
              <p>Collaborative</p>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">
              <p>About me</p>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
