import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import classes from "./VasagarVattam.module.css";

const VasagarVattam = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const onClickHandler = (ques) => {
    setIsActive(!isActive);
    console.log(ques);
    setActiveQuestion(ques.key);
  };
  const [margin, setMargin] = useState(0);
  const imageChangerRight = () => {
    setMargin(margin - 200);
  };
  const imageChangerleft = () => {
    if (margin !== 0) {
      setMargin(margin + 200);
    }
  };
  const faqQuestion = [
    {
      key: 1,
      question: "வாசகர் வட்டம்  எப்போது உருவானது ?",
      answer:
        "இந்திய தொழிற்நுட்ப கழகம், ஹைதராபாத் தமிழ்ச்சங்கத்தின்  ஓர் அங்கமாக, வாசகர் வட்டம் கடந்த 21-01-2024 அன்று,  IITH பொங்கல் விழா கொண்டாட்டத்தின் போது தொடங்கப்பட்டது. ",
    },
    {
      key: 2,
      question: "வாசகர் வட்டத்தின் நோக்கம் என்ன ?",
      answer:
        "IIT Hyderabad மாணவர்களிடம், பல்வகையான தமிழ் இலக்கியங்களை அறிமுகப்படுத்துவது. \nஒரு நூலை அறிமுகம் செய்து, படித்து, பின் அதனை கருத்தாக்கம் செய்வது.\nதமிழ் கூறும் கருத்துகளை உரையாடி, விவாதித்து நல்லறங்களை பின்பற்றுவது.  \n“தமிங்கிலம்” தவிர்த்து, “பண்ணு” தமிழ் அகற்றி, அழகு தமிழில் உரையாடுவது. \nஅடடே! தமிழ் என்றாலே அழகுதானே ! பிறகென்ன “அழகு தமிழ்” ? “தமிழில் உரையாடுவோம்“ அதைவிடவும் அழகொன்று உண்டோ ?\nமாணவர்களிடையே வாசிப்பு ஆர்வத்தை தூண்டி, புதிய வாசகர்களை உருவாக்குவது.",
    },
    {
      key: 3,
      question: "வாசகர் வட்டம் என்றால் என்ன ?",
      answer:
        "நம் மாணவர்கள் குழுவாக கூடி, ஓர் படைப்பை ( கதை / கவிதை / நாடகம் / கட்டுரை ) வாசித்து, பின் அதைப்பற்றி உரையாடும் நிகழ்வு. ",
    },
    {
      key: 4,
      question: "வாசகர் வட்டம் எங்கு எப்போது நடைபெறுகிறது ?",
      answer:
        "ஒவ்வொரு ஞாயிற்றுக்கிழமையும் மாலை 5:30 மணிக்கு (17:30) ஐஐடி ஹைதராபாத் பழைய உணவுக்கூட புல்வெளியில் நடைபெறுகிறது.  ",
    },
    {
      key: 5,
      question: "வாசகர் வட்டம் ஏன் தேவை ?",
      answer:
        "வாசிப்பே அரிதாகி விட்டது. தமிழ் இலக்கியங்கள் நமக்கெல்லாம் அறிமுகமே இல்லை. நம்மிடம் அல்லாடும் இந்த பாவப்பட்ட கைபேசிகளை சற்றே கண்ணயர்த்தி, புத்தகத்துடன் அளவளாவும் ஓர் முயற்சி.\nவாசிப்பு பழக்கமுள்ளவர்கள்கூட கல்லூரி படிப்பின் ஈடுபாட்டால் வாசிப்பதற்கு நேரமில்லை. ஆகவே, வாரமொருமுறை நேரம் ஒதுக்கி, தமிழில் கதை கேட்டு, கவிதை பாடி, சிந்தை தெளிந்து, மனம் திறந்து, கதைக்க வைக்கும் ஒரு கதைக்களி !\nவீட்டு நினைவில் வாடும், இளங்கலை மாணவர்களை தேற்றும் ஒரு நிகழ்வாகவும் அமைகிறது.\nபுத்தக வாசிப்பில் லயித்தவர்களும், லயிக்க விழைபவர்களும் ஒன்றாக கூடி விவாதிக்கும் புத்தக வாசிப்பால், சிந்தை புத்தாக்கம் அடைகிறது.\nஎப்படியோ, வாரமொருத்தியை வசியம் செய்து, வாசகியாய் வசப்படுத்துகிறது இந்த வாசிப்பு. \nமௌனிகளை கதைசொல்லியாக மாற்றுகிறது.\n",
    },
  ];
  const MyCollection = [
    {
      label: "First Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
      label: "Second Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
      label: "Third Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
    {
      label: "First Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
      label: "Second Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
      label: "Third Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
    {
      label: "First Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
      label: "Second Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
      label: "Third Picture",
      imgPath:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
  ];
  return (
    <>
      <Header />
      <section className={classes.container}>
        <section className={classes.hero}>
          <h1>VASAGAR VATTAM</h1>
          <div className={classes.heroContent}>
            <img src="/assets/Vaasagar Vattam.jpeg.jpg" alt="" />
            <div className={classes.heroText}>
              <p>
                வாசித்தல் என்பது அனுபவத்தை உள்வாங்குவதேயாகும். வாசிக்கும்
                பழக்கமுடையவர்கள் வாசித்தலின் மூலம், உலகை விசாலமாக பார்க்க
                தொடங்குகிறார்கள். நாம் வாழதொரு வாழ்வை, நகர்தலை,பூரிப்பை,
                தொடுதலை, தீண்டுதலையென வாசிப்பதன் மூலம் அடைகிறார்கள். வாழ்க்கை
                பயணத்தில், வாழமுடியாத தருணங்களை, வாசித்தல் வழங்குகிறது.
                எல்லாவற்றுக்கும் மேலாக, வாசித்தலின் வழியே மனித மனங்களில் நம்மால்
                குடியேர முடியும். மனித இயல்புகளை ஒருசேர உணர முடியும். பிறரின்
                அனுபவம் வாயிலாக, உலகை அடையும் எளிய வழி வாசித்தல் ஒன்றே!
              </p>
            </div>
          </div>
        </section>
        <section className={classes.gallery}>
          <h1>Gallery</h1>
          <div className={classes.imageSlider}>
            {MyCollection.map((image) => {
              return (
                <img
                  src={image.imgPath}
                  style={{
                    translate: `${margin}px`,
                    transition: "linear",
                  }}
                  alt=""
                />
              );
            })}
          </div>
          <div className={classes.imageControl}>
            <img
              onClick={imageChangerleft}
              src="/assets/left-arrow-1.svg"
              alt=""
            />
            <img
              onClick={imageChangerRight}
              src="/assets/right-arrow-1.svg"
              alt=""
            />
          </div>
        </section>
        <section className={classes.FAQ}>
          <h1>FAQs</h1>
          {faqQuestion.map((ques) => {
            return (
              <div className={classes.faqDrop}>
                <div className={classes.question}>
                  <h2>{ques.question}</h2>
                  <img
                    onClick={() => onClickHandler(ques)}
                    src="/assets/dropbox-arrow.svg"
                    alt=""
                  />
                </div>
                {isActive && ques.key === activeQuestion ? (
                  <div className={classes.answer}>
                    <p>{ques.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default VasagarVattam;
