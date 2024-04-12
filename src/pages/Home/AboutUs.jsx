import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.section}>
      <div className={classes.overlay} />
      <div className={classes.backImg} />
      <div className={classes.container}>
        <div className={classes.text}>
          <div className={classes.heading}>About us</div>
          <div className={classes.content}>
            <p>
              Welcome to the INDIAN INSTITUTE OF TECHNOLOGY – HYDERABAD
              SENTHAMIZH SANGAM, a hub for Tamil language and culture
              enthusiasts at IITH. Established in 2014 by dedicated Tamil
              students, the Sangam fosters community among faculty, staff,
              scholars, and students, celebrating Tamil heritage and traditions.
              Join us in our journey of preserving and promoting Tamil culture
              at IITH.
            </p>
          </div>
        </div>
        <div className={classes.image}>
          <div className={classes.imgContainer}>
            <img src="/assets/3.jpeg.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
