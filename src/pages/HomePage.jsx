import Footer from "../components/Footer";
import Header from "../components/header";
import AboutUs from "./Home/AboutUs";
import Events from "./Home/Events";
import HeroSection from "./Home/HeroSection";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Events />
      <Footer />
    </>
  );
};

export default HomePage;
