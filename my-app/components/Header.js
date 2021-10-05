import styles from "../styles/Home.module.css";
import ActiveLink from "./ActiveLink";

function Header() {
  return (
    <div>
      <h1 className={styles.title}>Íris Elva Ólafsdóttir</h1>
      <p className={styles.description}>
        Hi, I am newly graduated from web development at the Techical Academy and and welcome to my
        mini portfolio!
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
