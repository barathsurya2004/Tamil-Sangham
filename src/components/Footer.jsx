import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footerBanner}>
        <div className={classes.ico}>
          <img src="/assets/calendar.png" alt="" />
          <div>
            <h2>10</h2>

            <p>Years of Operation</p>
          </div>
        </div>
        <div className={classes.ico}>
          <img src="/assets/reading-book.png" alt="" />
          <div>
            <h2>300+</h2>
            <p>Active student community</p>
          </div>
        </div>
        <div className={classes.ico}>
          <img src="/assets/university-building.png" alt="" />
          <div>
            <h2>100+</h2>
            <p>Faculties and Staffs</p>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.bkgImg}></div>
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src="/assets/logo.webp" alt="" />
            <p>© Copyright Tamil Sangam IIT Hyderabad. All Rights Reserved</p>
          </div>
          <div className={classes.links}>
            <h1>Useful links</h1>

            <Link to={"/"}>
              <span>Home</span>
            </Link>
            <Link to={"/"}>
              <span>Events</span>
            </Link>
            <Link to={"/"}>
              <span>Team</span>
            </Link>
            <Link to={"/"}>
              <span>News</span>
            </Link>
            <Link to={"/"}>
              <span>Gallery</span>
            </Link>
          </div>
          <div className={classes.contact}>
            <h1>Contact</h1>
            <h3>IIT Hyderabad, Sangareddy, Telangana, India - 502285</h3>
            <p>
              <img src="/assets/email.png" alt="" />
              tamizhsangam23@gmail.com
            </p>
            <p>
              <img src="/assets/instagram.png" alt="" />
              thamizh_sangam
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
