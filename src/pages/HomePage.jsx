import Footer from "../components/Footer";
import Header from "../components/header";
import AboutUs from "./Home/AboutUs";
import Banner from "./Home/Banner";
import Events from "./Home/Events";
import HeroSection from "./Home/HeroSection";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Events />
      <Banner />
      <Footer />
    </>
  );
};

export default HomePage;
