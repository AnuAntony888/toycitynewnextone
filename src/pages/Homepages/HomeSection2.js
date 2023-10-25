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
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
    { img: "/shopify-offers.png" },
  ];
  const data2 = [
    { img: "/promotion1.jpg" },
    { img: "/prom2.jpg" },  { img: "/promotion1.jpg" },
    { img: "/prom2.jpg" },]
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className={styles.homepadding}>
        {/* *****************************section 4***************************** */}
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing={1}>
          <Grid item xs={12} md={12} lg={12} sm={12} sx={{ marginTop: "40px" }}>
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
              style={{ borderRadius: "25px" }}
            />
          </Grid>
          {/* *****************************section 5***************************** */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ textAlign: "center", marginTop: "25px" }}
          >
            <TypographyText
              Typography={<>Brand Portfolio</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />

            <TypographyText
              marginTop="10px"
              Typography={
                <>
                  Our brand portfolio includes wide range of products which
                  covers all categories suitable for different age groups
                  <br />
                  <br />
                </>
              }
            />
            <Buttons
              Buttonname={"Get in Touch"}
              fontWeight="500"
              bgcolor="#FFBC00"
              bgcolor1="red"
              color1="white"
              color="#001655"
            />
          </Grid>
          
        </Grid>
      </div>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        rowSpacing={1}
        sx={{ pt: "2%", pb: "2%" }}
        className={styles.homepadding2}
      >
        {data1?.map((curElem, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            {curElem.img ? (
              // Render an image if curElem.imageUrl is available
              <CardMedia
                component="img"
                image={curElem.img}
                width={"100%"}
                alt={""}
                className="image-card"
                sx={{ borderRadius: "25px" }}
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
        <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ textAlign: "center", marginTop: "25px" }}
          >
            <TypographyText
              Typography={<>Latest Promotion</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />

            <TypographyText
              marginTop="10px"
              Typography={
                <>
         Bring your littles ones to the Meet and Greet of Gabby and little cakey from Gabby's Dollhouse for a fun evening of singing, dancing, coloring and a MEOWmazing experience!
                  <br />
                </>
              }
            />
        </Grid>
        {data2?.map((curElem, index) => (
          <Grid item xs={4} md={3} lg={3} sm={3} key={index}>
            {curElem.img ? (
              // Render an image if curElem.imageUrl is available
              <CardMedia
                component="img"
                image={curElem.img}
                width={"100%"}
                alt={""}
                className="image-card"
                sx={{ borderRadius: "25px" }}
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
