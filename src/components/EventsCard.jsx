import classes from "./EventsCard.module.css";

const EventsCard = () => {
  return (
    <div className={classes.cardsContainer}>
      <div className={classes.card}>
        <img className={classes.backImgCard} src="/assets/volley3.jpg" alt="" />
        <div className={classes.overlayCard} />
        <div className={classes.cardContent}>
          <div className={classes.polaroid}>
            <div className={classes.img}>
              <img src="/assets/volley3.jpg" alt="" />
            </div>
          </div>
          <div className={classes.cardContents}>
            <img src="/assets/quote.svg" alt="" />
            <div className={classes.cardContentInfo}>
              <p>
                நம் மாணவர்கர்ள் குழுவாக கூடி, ஓர் படைப்பை (கதை / கவிதை /நாடகம் /
                கட்டுரை ) வாசித்துத் , பின் அதை ப்பற்றி உரையாடும் நிகழ்வு.
              </p>
              <h3>VASAGAR VATTAM</h3>
              <h4>Weekly Session</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
