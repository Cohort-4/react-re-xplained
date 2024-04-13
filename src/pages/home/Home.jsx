import Button from "../../components/button/Button";
import styles from "./home.module.css"
const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <h1>This is Homepage site</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        praesentium esse at! Consectetur eveniet perspiciatis eius nihil ratione
        libero obcaecati quod quos id quisquam error quam nostrum, incidunt
        laborum sunt architecto recusandae blanditiis? Cumque sequi facilis,
        corrupti fuga iste dolores dignissimos hic mollitia aliquid ullam libero
        unde dolor. Ipsum ipsam qui, explicabo sapiente vel, quae facere
        corporis itaque reprehenderit, veritatis nobis nesciunt distinctio
        impedit! Autem enim, nesciunt laudantium culpa laborum ex. Facere vitae
        voluptatibus, esse nobis officiis beatae debitis qui. Dolorum nobis
        reprehenderit illum illo quos et omnis odit eos, quo expedita magnam ut
        quas pariatur sunt quam, beatae explicabo?
      </p>
      {/* <button className={styles.btn}>Learn More</button> */}
      <Button text="Learn More" />
    </section>
  );
};
export default Home;
