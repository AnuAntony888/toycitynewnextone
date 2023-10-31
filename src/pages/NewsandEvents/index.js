import { Box, CardContent, CardMedia, Grid } from "@mui/material";
import React, { useEffect } from "react";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import styles from "../../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import AOS from "aos";
const Index = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  const newsandevents = [
    {
      backgroundImage: "url(/component.avif)",
      img: "/who2.jpg",
      txt1: "Toys and Games",
      txt2: (
        <>
          Toy City is a one-stop shop for the world of toy distribution. We do a
          lot more than just selling your stock to the retailers. We ensure that
          enough footprint is built around it through, visual merchandising
          creative marketing and product placement.
        </>
      ),
    },
    {
      backgroundImage: "url(/component.avif)",
      img: "/who3.jpg",
      txt1: "Toys and Games",
      txt2: (
        <>
          Toy City is a one-stop shop for the world of toy distribution. We do a
          lot more than just selling your stock to the retailers. We ensure that
          enough footprint is built around it through, visual merchandising
          creative marketing and product placement.
        </>
      ),
    },
    {
      backgroundImage: "url(/component.avif)",
      img: "/who4.jpg",
      txt1: "Toys and Games",
      txt2: (
        <>
          Toy City is a one-stop shop for the world of toy distribution. We do a
          lot more than just selling your stock to the retailers. We ensure that
          enough footprint is built around it through, visual merchandising
          creative marketing and product placement.
        </>
      ),
    },
  ];
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: "url(/secondlast.avif)",
              backgroundSize: "cover",
              padding: isSmallScreen ? "100px" : "150px",
            }}
          >
            <TypographyText
              Typography={<>News And Events</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{ marginTop: "1.5%" ,}}
      >
        {newsandevents.map((data, index) => (
          <Grid item xs={12} md={4} lg={4} sm={12} key={index}>
            <CardMedia
              component="img"
              alt="card"
              width={"100%"}
              height={"250px"}
              image={data.img}
            />
            <Box
              sx={{
                backgroundImage: data.backgroundImage,
                backgroundSize: "cover",
                padding: "20px",
                marginBottom: "30px",
              }}
            >
                    <div data-aos="zoom-in" data-aos-duration="1000">
              <TypographyText
                textAlign="centre"
                Typography={data.txt1}
                fontWeight="bolder"
                variant={"h6"}
              />
              <br />
              <TypographyText textAlign="left" Typography={data.txt2} />

              <br />
              <Buttons
                Buttonname={"see more"}
                fontWeight="bolder"
                color="#272974"
                bgcolor="#F9CF37"
                bgcolor1="red"
                color1="white"
              />
              <br />
                <br />
                </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{
       
          backgroundSize: "cover",
          marginBottom: "2.5%",
          marginTop:'1%',
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
            Typography={<>We’re here to help and answer any question you might have. We look forward to hearing from you.</>}
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
    </div>
  );
};

export default Index;
