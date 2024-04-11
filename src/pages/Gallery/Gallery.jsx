import Footer from "../../components/Footer";
import Header from "../../components/header";
import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <Header />
      <section className={classes.container}>
        <h1>Gallery</h1>
        <div className={classes.grid}>
          <div className={classes.leftCardComp}>
            <img src="/assets/volley3.jpg" alt="" />
            Tamil Sangham 2018
          </div>
          <div className={classes.rightCardComp}>
            <img src="/assets/volley3.jpg" alt="" />
            Tamil New Year 2022
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
