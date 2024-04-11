import { useState } from "react";
import EventsCard from "../../components/EventsCard";
import classes from "./Events.module.css";
const Events = () => {
  const [itemNo, setItemNo] = useState(0);
  const events = [
    {
      title: "VASAGAR VATTAM",
      session: "Weekly Session",
      backImgUrl: "/assets/volley3.jpg",
      polaroidImgUrl: "/assets/volley3.jpg",
      quote:
        "நம் மாணவர்கர்ள் குழுவாக கூடி, ஓர் படைப்பை (கதை / கவிதை /நாடகம் / கட்டுரை ) வாசித்துத் , பின் அதை ப்பற்றி உரையாடும் நிகழ்வு.",
      link: "vasagar-vattam",
    },
    {
      title: "Tamil New Year",
      session: "Annual Event",
      quote:
        "ஒவ்வொரு ஆண்டும், தமிழ் புத்தாண்டைக் குறிக்கும் வகையில், கலாச்சார நிகழ்ச்சிகள், பாரம்பரிய உணவுகள் மற்றும் மகிழ்ச்சியான விழாக்களுக்காக IITH சமூகத்தை ஒன்றிணைக்கும் ஒரு பெரிய கொண்டாட்டத்தை நடத்துகிறோம்.",
      backImgUrl: "/assets/volley3.jpg",
      polaroidImgUrl: "/assets/volley3.jpg",
    },
    {
      title: "Pongal Celebration",
      session: "Annual Event",
      quote:
        "தமிழ் புத்தாண்டுக்கு கூடுதலாக, பாரம்பரிய பொங்கல் உணவுகள், கலாச்சார நிகழ்ச்சிகள் மற்றும் பண்டிகை அலங்காரங்களுடன் முழுமையான அறுவடைத் திருவிழாவைக் கொண்டாடும் பொங்கல் நிகழ்வையும் நாங்கள் ஏற்பாடு செய்கிறோம்.",
      backImgUrl: "/assets/volley3.jpg",
      polaroidImgUrl: "/assets/volley3.jpg",
    },
    {
      title: "Fresher Meet",
      session: "Annual Event",
      quote:
        "ஒவ்வொரு கல்வியாண்டின் தொடக்கத்திலும், ஐஐடிஎச்-க்கு புதிய மாணவர்களை வரவேற்கவும், வளாகத்தில் உள்ள துடிப்பான தமிழ் சமூகத்திற்கு அவர்களை அறிமுகப்படுத்தவும், அவர்களின் புதிய சூழலில் அவர்கள் வீட்டில் இருப்பதை உணரவும் ஒரு சிறப்பு நிகழ்வை ஏற்பாடு செய்கிறோம்.",
      backImgUrl: "/assets/volley3.jpg",
      polaroidImgUrl: "/assets/volley3.jpg",
    },
    {
      title: "Volley Ball Tournament ",
      session: "Annual Event",
      quote:
        "தமிழ் புத்தாண்டுக்கு முன், தமிழ் சமூகத்தில் விளையாட்டு உணர்வை ஊக்குவிக்கும் வகையில் உற்சாகமான கைப்பந்து போட்டியை நடத்துகிறோம். இந்த நிகழ்வு பங்கேற்பாளர்களிடையே நட்புறவை வளர்ப்பது மட்டுமல்லாமல் ஆரோக்கியமான வாழ்க்கை முறை மற்றும் குழுப்பணியையும் ஊக்குவிக்கிறது ",
      backImgUrl: "/assets/volley3.jpg",
      polaroidImgUrl: "/assets/volley3.jpg",
    },
  ];
  const rightClickHandler = () => {
    if (itemNo >= events.length - 1) {
      setItemNo(0);
    } else {
      setItemNo(itemNo + 1);
    }
  };
  const leftClickHandler = () => {
    if (itemNo === 0) {
      setItemNo(events.length - 1);
    } else {
      setItemNo(itemNo - 1);
    }
  };
  return (
    <div className={classes.section}>
      <div className={classes.backImg} />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h1>Events</h1>
        <EventsCard info={events[itemNo]} />
        <div className={classes.arrowContainer}>
          <div onClick={leftClickHandler} className={classes.leftArrow}>
            <img src="/assets/left-arrow.svg" alt="" />
          </div>
          <div onClick={rightClickHandler} className={classes.rightArrow}>
            <img src="/assets/right-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
