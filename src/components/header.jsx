import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src="/assets/logo.webp" alt="logo" />
        <span>TAMIZH SANGAM IITH</span>
      </div>
      <div className={classes.button}>Contact</div>
    </div>
  );
};

export default Header;
