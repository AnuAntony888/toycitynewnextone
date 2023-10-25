import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "../../../ReusableComponent/Banner";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Homesection1 = () => {
  const data = [
    { img: "/banner1.jpg", btnname: "Get touch" },
    { img: "/banner4.jpeg", btnname: "Get touch" },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    autoplay: true, // Enable autoplay
    autoplaySpeed: 1400,
  };
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  return (
    <>
      <Slider {...settings}>
        {data.map((curElem, index) => (
          <div key={index}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              rowSpacing={1}
            >
              <Grid
                item
                key={curElem?.banner_id}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                height={{
                  lg: "21vw",
                  md: "20vw",
                  sm: "20vw",
                  xs: "55vw",
                }}
              >
                {curElem.url ? (
                  <a
                    href={curElem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="toysbanner"
                      src={curElem.img}
                      width="100%"
                      className={styles.homeoffer1img}
                    />
                    <Buttons
                      Buttonname={curElem.btnname}
                      fontWeight="bolder"
                      color="#272974"
                      bgcolor="#F9CF37"
                      bgcolor1="red"
                      color1="white"
                      float={isSmallScreen ? "centre" : "right"}
                      transform={
                        isSmallScreen
                          ? "translate(0, -50px)"
                          : "translate(-200px, -150px)"
                      }
                    />
                  </a>
                ) : (
                  <>
                    <img
                      alt="toysbanner"
                      src={curElem.img}
                      width="100%"
                      className={styles.homeoffer1img}
                    />
                    <Buttons
                      Buttonname={curElem.btnname}
                      fontWeight="500"
                      bgcolor="#FFBC00"
                      bgcolor1="red"
                      color1="white"
                      color="#001655"
                      float={isSmallScreen ? "centre" : "right"}
                      transform={
                        isSmallScreen
                          ? "translate(0, -50px)"
                          : "translate(-200px, -150px)"
                      }
                    />
                  </>
                )}
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>

      {/* *****************************section 2***************************** */}
      <div className={styles.homepadding2}
      
      >
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: isSmallScreen ? "0px" : "25px",}}
        >
          <Grid item xs={12} md={6} lg={6} sm={12} sx={{ textAlign: "left" }}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <TypographyText
                Typography={<>About Us</>}
                fontWeight="bolder"
                variant={"h5"}
                textAlign="left"
              />
            </div>
            <div data-aos="zoom-in">
              <TypographyText
                textAlign="left"
                marginTop="10px"
                Typography={
                  <>
                    Toy City is a one-stop shop for the world of toy
                    distribution. We do a lot more than just selling your stock
                    to the retailers. We ensure that enough footprint is built
                    around it through, visual merchandising creative marketing
                    and product placement.
                    <br />
                    <br />
                    We currently work with 24 brands and have a tremendously
                    effective team, experienced in managing operations,
                    logistics and marketing. The team works hard and smart to
                    enrich the brand experience at every stop from sell-in to
                    sell-out by managing sales, in-store displays, events,
                    advertising etc.
                    <br />
                    <br />
                    We are the first toy-distributor in Saudi Arabia that
                    complies with e-cosma &amp; GCTS/Saber certification (SASO
                    Procedures) for all the products lines we address.
                    <br />
                    <br />
                  </>
                }
              />
            </div>
            <Buttons
              Buttonname={"Read more"}
              fontWeight="500"
              bgcolor="#FFBC00"
              bgcolor1="red"
              color1="white"
              color="#001655"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12} sx={{margin:'auto'}} >
            <img
              src="/aboutus.jpg"
              alt="about_section"
              width={"100%"}
              style={{ borderRadius: "30px" }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Homesection1;
