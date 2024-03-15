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
              Welcome to the website of the INDIAN INSTITUTE OF TECHNOLOGY –
              HYDERABAD SENTHAMIZH SANGAM. This Sangam offers a platform for
              those who are interested in Tamil language and culture and also
              acts as a forum for the Tamil community at IITH. The Sangam is the
              result of efforts by Tamil students who have been a part of IITH
              since its beginning in 2008. It took its present form on April 14,
              2014, with the celebration of the Tamil New Year, bringing
              together faculty, staff, scholars, and students.
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
