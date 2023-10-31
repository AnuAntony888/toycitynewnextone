import React, { useEffect } from "react";

import { Box, CardMedia, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "../../styles/Home.module.css";
import Banner from "../../../ReusableComponent/Banner";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import "aos/dist/aos.css";
import AOS from "aos";
const Index = () => {
  const datas = [
    { img: "/lego.webp" },
    { img: "/barbie.webp" },
    { img: "/lego.webp" },
    { img: "/matchbox.webp" },
    { img: "/lego.webp" },
    { img: "/barbie.webp" },
    { img: "/lego.webp" },
    { img: "/matchbox.webp" },
  ];
  const data = [
    {
      imageUrl: "/who3.jpg",
    },
    {
      imageUrl: "/who2.jpg",
    },
    {
      imageUrl: "/who3.jpg",
    },
    {
      imageUrl: "/who2.jpg",
    },
    {
      imageUrl: "/who3.jpg",
    },
    {
      imageUrl: "/who2.jpg",
    },
    {
      imageUrl: "/who3.jpg",
    },
    {
      imageUrl: "/who2.jpg",
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: "url(/brandprotfoli.jpg)",
              backgroundSize: "cover",
              padding: isSmallScreen ? "70px" : "100px",
            }}
          >
            <TypographyText
              Typography={<>Brand Portfolio</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />
          </Box>
        </Grid>
      </Grid>

      {/***************************section************************** */}
      <Grid container spacing={2} className={styles.homepadding11}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <TypographyText
              Typography={
                <>
                  Toycite is a fun and catchy name for a toy store website. It
                  conveys the idea of a place where people can find a variety of
                  toys and playthings. When creating your website under this
                  name, consider designing a vibrant and engaging online space
                  to showcase your brand portfolio, attract customers, and
                  provide a memorable shopping experience for toy enthusiasts.
                </>
              }
              textAlign="left"
            />
          </div>
        </Grid>
      </Grid>

      {/***************************section2************************** */}

      <Grid
        container
        spacing={2}
        className={styles.homepadding11}
        sx={{
          backgroundImage: "url(/bgtoys.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <div data-aos="flip-left">
            <TypographyText
              Typography={<>Toys</>}
              fontWeight="bolder"
              variant={"h6"}
              textAlign="centre"
            />
          </div>
        </Grid>
        {datas.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <CardMedia
                component="img"
                image={item.img}
                alt="brand_image"
                width={"100%"}
                sx={{ borderRadius: "30px" }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      {/***************************section************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding11}
        sx={{
          marginTop: "2.5%",
          backgroundImage: "url(/frame2.avif)",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={12}
          lg={12}
          sm={12}
          sx={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <div data-aos="flip-left">
            <TypographyText
              Typography={<>Toys</>}
              fontWeight="bolder"
              variant={"h6"}
              textAlign="centre"
            />
          </div>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt="brand_image"
                width={"100%"}
                sx={{ borderRadius: "30px" }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      {/***************************section3***************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding11}
        sx={{
          marginTop: "2.5%",
          backgroundImage: "url(/blue.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <div data-aos="flip-left">
            <TypographyText
              Typography={<>Play Cosmetics</>}
              fontWeight="bolder"
              variant={"h6"}
              textAlign="centre"
            />
          </div>
        </Grid>
        {datas.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <CardMedia
                component="img"
                image={item.img}
                alt="brand_image"
                width={"100%"}
                sx={{ borderRadius: "30px" }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      {/*****************************************88 */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding11}
        sx={{
          marginTop: "2.5%",
          backgroundImage: "url(/green.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <div data-aos="flip-left">
            <TypographyText
              Typography={<>Play Cosmetics</>}
              fontWeight="bolder"
              variant={"h6"}
              textAlign="centre"
            />
          </div>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt="brand_image"
                width={"100%"}
                sx={{ borderRadius: "30px" }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
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
          <div data-aos="fade-up" data-aos-duration="3000">
            <TypographyText
              Typography={<>Get in Touch with us </>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />
            <TypographyText
              Typography={
                <>
                  We’re here to help and answer any question you might have. We
                  look forward to hearing from you.
                </>
              }
              variant={"1rem"}
              textAlign="centre"
            />{" "}
            <br />
            <br />
            <Buttons
              Buttonname={"Contact Us"}
              fontWeight="bolder"
              color="#272974"
              bgcolor="#F9CF37"
              bgcolor1="red"
              color1="white"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
