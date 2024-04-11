import Footer from "../../components/Footer";
import Header from "../../components/header";
import classes from "./VasagarVattam.module.css";

const VasagarVattam = () => {
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
            <img src="/assets/vasagar-vattam.webp" alt="" />
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
              return <img src={image.imgPath} alt="" />;
            })}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default VasagarVattam;
