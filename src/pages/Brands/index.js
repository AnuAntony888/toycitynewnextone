

import React from "react";

import { CardMedia, Grid,  } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "../../styles/Home.module.css";
import Banner from "../../../ReusableComponent/Banner";
import { DividerComp, TypographyText } from "../../../ReusableComponent/Reusab";



const Index = () => {
  const data = ["/brandbanner.jpeg"];
  const datas = [
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className="homeoffer1">
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing={1}>
          <Banner
            data={data}
            className={styles.homeoffer1img}
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
          />
        </Grid>
      </div>
      {/*---------------------section---------------------------*/}
      <Grid
        container
        spacing={2}
        className={styles.homepadding2}
        sx={{ paddingBottom: "50px" ,pt:'20px'}}
      >
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText 
            Typography={<>Brand Portfolio</>}
            fontWeight="bolder"
            variant={isSmallScreen ? "h5" : "h4"}
            textAlign="centre"
          />

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <DividerComp />
          </Grid>
        </Grid>
        {/***************************section************************** */}
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Toys</>}
            fontWeight="bolder"
            variant={"h6"}
            textAlign="centre"
          />
        </Grid>
        {datas.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <CardMedia
              component="img"
              image={item.img}
              alt="brand_image"
              width={"100%"}
              sx={{ borderRadius: "30px" }}
            />
          </Grid>
        ))}
        {/***************************section************************** */}
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Toys</>}
            fontWeight="bolder"
            variant={"h6"}
            textAlign="centre"
          />
        </Grid>
        {datas.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <CardMedia
              component="img"
              image={item.img}
              alt="brand_image"
              width={"100%"}
              sx={{ borderRadius: "30px" }}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Play Cosmetics</>}
            fontWeight="bolder"
            variant={"h6"}
            textAlign="centre"
          />
        </Grid>
        {datas.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <CardMedia
              component="img"
              image={item.img}
              alt="brand_image"
              width={"100%"}
              sx={{ borderRadius: "30px" }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Index;

