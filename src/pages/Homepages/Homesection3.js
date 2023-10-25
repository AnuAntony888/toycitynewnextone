import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import AOS from "aos";
const Homesection3 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    autoplay: true, // Enable autoplay
    autoplaySpeed: 1400,
  };
  return (
    <div className={styles.homepadding}>
      {/* *****************************section 6***************************** */}
      <Grid
        container
        spacing={2}
        sx={{ paddingBottom: "30px" }}
        className={styles.homepadding1}
      >
        <Grid item xs={12} md={6} lg={6} sm={12} sx={{ textAlign: "left" }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <TypographyText
            Typography={<>Want to know more?</>}
            fontWeight="600"
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
                Toy City is a one-stop shop for the world of toy distribution.
                We do a lot more than just selling your stock to the retailers.
                We ensure that enough footprint is built around it through,
                visual merchandising creative marketing and product placement.
                We currently work with 24 brands and have a tremendously
                effective team, experienced in managing operations, logistics
                and marketing. The team works hard and smart to enrich the brand
                experience at every stop from sell-in to sell-out by managing
                sales, in-store displays, events, advertising etc.
                <br />
                <br />
              </>
            }
            />
            </div>
          <Buttons
            Buttonname={"Contact Us"}
            fontWeight="500"
            bgcolor="#FFBC00"
            bgcolor1="red"
            color1="white"
            color="#001655"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12}>
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
                      lg: "25vw",
                      md: "20vw",
                      sm: "20vw",
                      xs: "55vw",
                    }}
                  >
                    <img
                      alt="toysbanner"
                      src={curElem.img}
                      width="100%"
                      className={styles.homeoffer1img}
                      style={{ borderRadius: "30px" }}
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homesection3;
const data = [{ img: "/who.jpg" }, { img: "/who2.jpg" }, { img: "/who3.jpg" }];
