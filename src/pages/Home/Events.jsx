import EventsCard from "../../components/EventsCard";
import classes from "./Events.module.css";
const Events = () => {
  return (
    <div className={classes.section}>
      <div className={classes.backImg} />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h1>Events</h1>
        <EventsCard />
        <div className={classes.arrowContainer}>
          <div className={classes.leftArrow}>
            <img src="/assets/left-arrow.svg" alt="" />
          </div>
          <div className={classes.rightArrow}>
            <img src="/assets/right-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
