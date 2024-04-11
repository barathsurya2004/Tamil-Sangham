import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <Link to={"/"}>
        <div className={classes.logo}>
          <img
            className={classes.logoImage}
            src="/assets/logo.webp"
            alt="logo"
          />
          <span>TAMIZH SANGAM IITH</span>
        </div>
      </Link>
      <div className={classes.button}>
        <a href="mailto:tamizhsangam23@gmail.com">Contact</a>
      </div>
    </div>
  );
};

export default Header;
