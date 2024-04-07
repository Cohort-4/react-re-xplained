import styles from "./layout.module.css";
import { Navbar, Footer } from "../../components/index";
const Layout = ({ children }) => {
  return (
    <section className={styles.layoutContainer}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};
export default Layout;
