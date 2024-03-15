import Header from "../components/header";
import AboutUs from "./Home/AboutUs";
import HeroSection from "./Home/HeroSection";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <div className={classes.section}>
        <div className={classes.backImg} />
        <div className={classes.overlay} />
        <div className={classes.content}>
          <h1>Events</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
