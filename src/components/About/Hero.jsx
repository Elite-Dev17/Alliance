// import Hero1 from "../../assets/images/hero/Hero1.jpg";
import styles from "./Hero.module.css"; 
import Gathering from "../../assets/images/gallery/Gathering.jpg";

const Banner = () => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${Gathering})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p className={styles.breadcrumb}>
          <a href="/">Home</a> <span> &gt; About Us</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
