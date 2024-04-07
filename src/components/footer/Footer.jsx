import { BiCopyright } from "react-icons/bi";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <h1>Footer</h1>
      <section className={styles.footerContent}>
        <BiCopyright />
        <h3>Marusoft Technologies Limited</h3>
      </section>
    </section>
  );
};
export default Footer;
