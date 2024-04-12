import Footer from "../../components/Footer";
import Header from "../../components/header";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const Mycollections = [
    {
      title: "Tamil Sangham 2018",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
    {
      title: "Tamil New Year '22",
      bkgImg: "/assets/volley3.jpg",
      available: true,
      link: null,
    },
    {
      title: "TNY Creatives '23",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
    {
      title: "TNY Volley ball Tournament'23",
      bkgImg: "/assets/volley3.jpg",
      available: true,
      link: null,
    },
    {
      title: "Tamil New Year'23",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
    {
      title: "Freshers Meet '23",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
    {
      title: "Pongal celebration '24",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
    {
      title: "Pongal Event '24",
      bkgImg: "/assets/volley3.jpg",
      available: false,
      link: null,
    },
  ];
  return (
    <>
      <Header />
      <section className={classes.container}>
        <h1>Gallery</h1>
        <div className={classes.grid}>
          {Mycollections.map((ele, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <div className={classes.leftCardComp}>
                    <div className={classes.image}>
                      {ele.available && (
                        <div
                          className={`${classes.overlay} ${classes.overlayLeft}`}
                        >
                          Click Here to see All Pictures
                        </div>
                      )}
                      <img src={ele.bkgImg} alt="" />
                    </div>

                    <p>{ele.title}</p>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className={classes.rightCardComp}>
                    <div className={classes.image}>
                      {ele.available && (
                        <div
                          className={`${classes.overlay} ${classes.overlayRight}`}
                        >
                          Click Here to see all Pictures
                        </div>
                      )}
                      <img src={ele.bkgImg} alt="" />
                    </div>
                    <p>{ele.title}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
