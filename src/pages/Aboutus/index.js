import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../../../ReusableComponent/Banner";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import "aos/dist/aos.css";
import AOS from "aos";
const Index = () => {
  const data = ["/abutuspage1.jpg"];
  const data2 = ["/about2.jpg"];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const datas = [
    {
      url: "url(/pink.jpg)",
      txt: "Instore branding",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/red-watercolor-background_1116-195.jpg)",
      txt: "Advertising",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/green.jpg)",
      txt: "Launch events",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/blue.jpg)",
      txt: "Orientation programs ",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
  ];
  const vissionmission = [
    {
      backgroundImage: "url(/green.jpg) ",
      txt1: "Our Mission",
      txt2: (
        <>
          Our mission is to meticulously source, develop and market a diverse
          range of children’s products. We are dedicated to offering high
          quality toys and educational material that kindle creativity, enhance
          motor skills, stimulate imagination and foster a genuine love for
          learning in every child. Our focus is on carefully curating our
          selection to enrich the lives of our consumers while ensuring that the
          element of fun is never compromised. We strive to become go-to-choice
          for parents, caregivers, guardians and educators in the Mena region,
          trusted for our unwavering focus on safety, quality and innovation.
          Join us in creating a world where children can thrive, explore, and
          grow through the transformative power of play.
        </>
      ),
    },
    {
      backgroundImage: "url(/blue.jpg)",
      txt1: "Our Vission",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children. Through our commitment to excellence, we strive
          to provide unparalleled service to our valued business partners and
          customers, ensuring their success and satisfaction. We aim to optimize
          efficiency in every aspect of our operations by leveraging
          cutting-edge logistics, innovative technologies and a passionate team
          of employees. Together with our partners, we aspire to shape the toy
          industry, bringing delight and happiness to every child in the MENA
          region.
        </>
      ),
    },
  ];
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
         
      <Grid container spacing={5}>
        <Grid item xs={12} sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Banner
            data={data}
            className={styles.homeoffer1img}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            height={{
              lg: "25vw",
              md: "25vw",
              sm: "25vw",
              xs: "55vw",
            }}
          />
          <TypographyText
            Typography={<>About Us</>}
            fontWeight="bolder"
            variant={"h5"}
            textAlign="centre"
            transform={
              isSmallScreen ? "translate(0, -90px)" : "translate(0px, -150px)"
            }
          />
        </Grid>
      </Grid>
      {/************************************ ****************************************/}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{
          pb: "2%",
          pt: "2%",
          // backgroundImage: `url('/back.avif')`,
          // paddingBottom: "40px",
          // backgroundSize: "cover",
        }}
      >
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <TypographyText
              Typography={<>Who We Are</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="left"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <TypographyText
              textAlign="left"
              marginTop="10px"
              Typography={
                <>
                  We do more than simply ‘sell’ your inventory to merchants. As
                  a specialist distributor in Saudi Arabia, we cater to the
                  needs of specialty stores, standalone stores, and travel
                  retail outlets.
                  <br />
                  <br />
                  We ensure wide-spread visibility for our brands across the
                  entire country through our strong partnerships with retailers,
                  resulting in prominent in-store positioning for our brands.
                  Our singular focus on the Saudi market is a major contributor
                  to our success.
                  <br />
                  <br />
                  We are currently working with 35+ brands with the aim of
                  establishing international brands in the local markets. Our
                  team consists of experienced and efficient members, delivering
                  at multiple scales whilst maintaining an extraordinary
                  experience.
                  <br />
                  <br />
                  Our corporate office is located in Jeddah along with a
                  dedicated showroom for our retail customers. We have well
                  established infrastructure with a 1500 sqm warehouse and a
                  delivery network across KSA. Our field executives cover all
                  the major cities to ensure seamless sales and service in the
                  region. <br />
                  <br />
                </>
              }
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sm={12}
          height={{
            lg: "45vw",
            md: "60vw",
          }}
          sx={{ margin: "auto" }}
        >
          <img
            alt="toysbanner"
            src="/who2.jpg"
            width="100%"
            className={styles.homeoffer1img}
            style={{ borderRadius: "30px" }}
          />
        </Grid>
      </Grid>
      {/* *****************************section 2***************************** */}

      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        // sx={{ mt: "5px" }}
      >
        {vissionmission.map((data, index) => (
          <Grid item xs={12} md={6} lg={6} sm={12} key={index}>
            <CardContent
              sx={{
                backgroundImage: data.backgroundImage,
                backgroundSize: "cover",
                p: "10px",
                borderRadius: "15px",
                padding: "20px",
              }}
            >
              <div data-aos="zoom-out-up">
                <TypographyText
                  textAlign="centre"
                  Typography={data.txt1}
                  fontWeight="bolder"
                  variant={"h5"}
                />
              </div>
              <br />
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <TypographyText textAlign="left" Typography={data.txt2} />
              </div>
              <br />
              <Buttons
                Buttonname={"Read more"}
                fontWeight="600"
                color="#272974"
                bgcolor="#F9CF37"
                bgcolor1="red"
                color1="white"
              />
            </CardContent>
          </Grid>
        ))}
      </Grid>
      {/* *****************************section 2***************************** */}

      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{ marginTop: "5px" }}
      >
        <Grid item xs={12} md={12} lg={12} sm={12}>
        <div data-aos="fade-up">
          <TypographyText
            textAlign="centre"
            Typography={<>What We Offer</>}
            fontWeight="bolder"
            variant={"h5"}
            />
            </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <TypographyText
              textAlign="left"
              marginTop="10px"
              Typography={
                <>
                  At ToyCity, we specialize in crafting comprehensive marketing
                  strategies tailored to your specific needs. We take pride in
                  designing effective marketing plans, launch strategies and
                  identifying Key Performance Indicators (KPIs) to ensure your
                  brands success. With our expertise . we offer a complete 360
                  marketing plan that aligns with your brand’s unique
                  specifications and potential.
                  <br />
                  <br />
                  Our dedicated team works diligently to ensure maximum brand
                  exposure in the market. We understand the importance of a
                  strong market presence, and thats why we prioritize your
                  brands safety and success. When you partner with us, you can
                  rest assured knowing that your brand is in capable hands.
                  Together, well embark on a journey to launch your brand with
                  precision, creativity, and unwavering commitment to achieving
                  outstanding results.
                </>
              }
            />
          </div>
        </Grid>
      </Grid>
      {/* *****************************section 4***************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{ marginTop: "5px", marginBottom: "15px" }}
      >
        <Banner
          data={data2}
          className={styles.homeoffer1img}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          height={{
            lg: "28vw",
            md: "25vw",
            sm: "20vw",
            xs: "46vw",
          }}
          style={{ borderRadius: "25px" }}
        />
      </Grid>
      {/* *****************************section 4***************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>360 Marketing </>}
            fontWeight="bolder"
            variant={"h5"}
            textAlign="centre"
          />
        </Grid>
        {datas.map((data, index) => (
          <Grid item xs={12} md={6} lg={3} sm={12} key={index}>
            <Card
              sx={{
                backgroundImage: data.url,

                backgroundSize: "cover",

                // boxShadow: "none",
                p: "2%",
              }}
            >
              <CardContent>
              <div data-aos="zoom-in">
                <TypographyText
                  textAlign="centre"
                  Typography={data.txt}
                  fontWeight="bolder"
                  variant={"1.48rem"}
                />{" "}
                <br />
                <br />
                <TypographyText textAlign="left" Typography={data.txt2} />
                <br />
                <br />
                <Buttons
                  Buttonname={data.button}
                  fontWeight="bolder"
                  color="#272974"
                  bgcolor="#F9CF37"
                  bgcolor1="red"
                  color1="white"
                  />
                  </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* *****************************section 5***************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{
          marginTop: "30px",
          backgroundSize: "cover",
          marginBottom: "30px",

          backgroundImage: `url('/pinkabout.jpg')`,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ margin: isSmallScreen ? "50px" : "70px" }}
        >
          <div data-aos="fade-up"
     data-aos-duration="3000">
          <TypographyText
            Typography={<>Get in Touch with us </>}
            fontWeight="bolder"
            variant={"h5"}
            textAlign="centre"
          />
          <TypographyText
            Typography={<>Partner with us to build your brand’s presence.</>}
            variant={"1rem"}
            textAlign="centre"
          />{" "}
          <br />
          <br />
          <Buttons
            Buttonname={"Read more"}
            fontWeight="bolder"
            color="#272974"
            bgcolor="#F9CF37"
            bgcolor1="red"
            color1="white"
            />
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
