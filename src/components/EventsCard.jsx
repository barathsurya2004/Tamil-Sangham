import classes from "./EventsCard.module.css";
import { Link, useNavigate } from "react-router-dom";
const EventsCard = ({ info }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.cardsContainer}>
      <div className={classes.card}>
        <img className={classes.backImgCard} src={info.backImgUrl} alt="" />
        <div className={classes.overlayCard} />
        <div className={classes.cardContent}>
          <div className={classes.polaroid}>
            <div className={classes.img}>
              <img src={info.polaroidImgUrl} alt="" />
            </div>
          </div>
          <div className={classes.cardContents}>
            <img src="/assets/quote.svg" alt="" />
            <div className={classes.cardContentInfo}>
              <p>{info.quote}</p>
              <Link to={info.link}>
                <h3>{info.title}</h3>
              </Link>
              <h4>{info.session}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
