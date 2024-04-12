import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
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
            <a href="mailto:tamizhsangam23@gmail.com">
              <p>
                <img src="/assets/email.png" alt="" />
                tamizhsangam23@gmail.com
              </p>
            </a>
            <a href="https://www.instagram.com/thamizhsangam_iith/">
              <p>
                <img src="/assets/instagram.png" alt="" />
                thamizh_sangam
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
