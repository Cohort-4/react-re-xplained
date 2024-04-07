import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css";
import { navLinks } from "./data";

const Navbar = () => {
  return (
    <section className={styles.navContainer}>
      <header className={styles.navWrapper}>
        <Link to="/" className={styles.links}>
          <h1 className={styles.logo}>Logo</h1>
        </Link>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <Link to={link.path} className={styles.links}>
              <li key={link.id} className={styles.navItem}>
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
        <FaBars className={styles.bars} />
      </header>
    </section>
  );
};

// props
export default Navbar;
