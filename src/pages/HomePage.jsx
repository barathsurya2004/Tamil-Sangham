import Header from "../components/header";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className={classes.section}>
        <div className={classes.grid}>
          <div className={classes.img}>
            <div className={`${classes.one} ${classes.overlay}`} />
            <img src="/assets/3.jpeg.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.two} ${classes.overlay}`} />
            <img src="/assets/2.jpeg.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.three} ${classes.overlay}`} />
            <img src="/assets/7.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.four} ${classes.overlay}`} />
            <img src="/assets/6.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
