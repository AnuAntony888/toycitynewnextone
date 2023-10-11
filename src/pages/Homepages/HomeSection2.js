import { CardMedia, Grid, Skeleton } from "@mui/material";
import React from "react";
import Banner from "../../../ReusableComponent/Banner";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const HomeSection2 = () => {
  const data = ["/banner2.jpg"];
  const data1 = [
    {
      imageUrl: "/1.jpg",
    },
    {
      imageUrl: "/1.jpg",
    },
    {
      imageUrl: "/1.jpg",
    },
    {
      imageUrl: "/1.jpg",
    },
    {
      imageUrl: "/1.jpg",
    },
    {
      imageUrl: "/1.jpg",
    },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className={styles.homepadding1}>
        {/* *****************************section 4***************************** */}
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing={1} sx={{pt:'10px'}}>
          <Grid item xs={12} md={12} lg={12} sm={12}>
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
                xs: "46vw",
              }}
            />
          </Grid>
          {/* *****************************section 5***************************** */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ textAlign: "center" }}
          >
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

            <TypographyText
              Typography={
                <>
                  Our brand portfolio includes wide range of products which
                  covers all categories suitable for different age groups
                </>
              }
              fontWeight="bolder"
              variant={"1.23rem"}
              textAlign="centre"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <Buttons
              Buttonname={"Get in Touch"}
              fontWeight="bolder"
              color="#272974"
              bgcolor="#F9CF37"
              bgcolor1="red"
              color1="white"
            />
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        rowSpacing={1}
        sx={{ pt: "2%" ,pb:'2%'}}
        className={styles.homepadding2}
      >
        {data1?.map((curElem) => (
          <Grid item xs={6} lg={2} md={3} sm={4} key={curElem.index}>
            {curElem.imageUrl ? (
              // Render an image if curElem.imageUrl is available
              <CardMedia
                component="img"
                image={curElem.imageUrl}
                width={"100%"}
                alt={""}
                className="image-card"
              />
            ) : (
              // Render a placeholder (skeleton) if curElem.imageUrl is not available
              <Skeleton
                variant="rectangular"
                width="100%"
                height={230}
                sx={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: "4px",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeSection2;
