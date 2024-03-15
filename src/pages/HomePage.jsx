import Header from "../components/header";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={classes.section}>
        <div className={classes.title}>
          <div className={classes.thiru}>
            <h1>THIRUKURAL OF THE DAY</h1>
            <h2>
              மனநலத்தின் ஆகும் மறுமைமற் றஃதும் <br /> இனநலத்தின் ஏமாப் புடைத்து.
            </h2>
            <h3>
              Although to mental goodness joys of other life belong, Yet good
              companionship is confirmation strong
            </h3>
          </div>
        </div>

        <div className={classes.grid}>
          <div className={classes.fullOverlay} />
          <div className={classes.img}>
            <div className={`${classes.e1} ${classes.topic}`}>NEWS</div>
            <div className={`${classes.one} ${classes.overlay}`} />
            <img src="/assets/3.jpeg.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.e2} ${classes.topic}`}>EVENTS</div>
            <div className={`${classes.two} ${classes.overlay}`} />
            <img src="/assets/2.jpeg.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.e3} ${classes.topic}`}>KONDRAI</div>
            <div className={`${classes.three} ${classes.overlay}`} />
            <img src="/assets/7.jpg" alt="" />
          </div>
          <div className={classes.img}>
            <div className={`${classes.e4} ${classes.topic}`}>GALLERY</div>
            <div className={`${classes.four} ${classes.overlay}`} />
            <img src="/assets/6.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
