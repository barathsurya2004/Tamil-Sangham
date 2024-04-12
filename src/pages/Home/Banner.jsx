import classes from "./Banner.module.css";

const Banner = () => {
  return (
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
  );
};

export default Banner;
