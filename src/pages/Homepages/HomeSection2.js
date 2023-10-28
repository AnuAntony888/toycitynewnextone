import { CardMedia, Grid, Skeleton } from "@mui/material";
import React from "react";
import Banner from "../../../ReusableComponent/Banner";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={styles.slickbuttonprev} onClick={onClick}>
        <KeyboardArrowLeftIcon />
      </div>
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.slickbuttonnext} onClick={onClick}>
      <KeyboardArrowRightIcon className="keybordarrow" />
    </div>
  );
}
const HomeSection2 = () => {
  const data = ["/paw.jpg"];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const data1 = [
    { img: "/lego.webp" },
    { img: "/barbie.webp" },
    { img: "/lego.webp" },
    { img: "/matchbox.webp" },
    { img: "/lego.webp" },
    { img: "/barbie.webp" },
    { img: "/lego.webp" },
    { img: "/matchbox.webp" },
  ];
  const data2 = [
    { img: "/promotion1.jpg" },
    { img: "/prom2.jpg" },
    { img: "/promotion1.jpg" },
    { img: "/prom2.jpg" },
    { img: "/prom2.jpg" },
  ];

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,

        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        autoplay: true,
      },
      {
        breakpoint: 962,

        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 2,
        infinite: true,
        autoplay: true,
      },
      {
        breakpoint: 769,

        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 2,
        autoplay: true,
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <Grid container spacing={0} sx={{ marginTop: "40px" }}>
        <Grid xs={12} className={styles.trainContainer}>
          <TypographyText
            Typography={<>Together Lets inspired by children</>}
            fontWeight="bolder"
            variant={"h5"}
            textAlign="right"
            padding={"2%"}
          />

          <img
            src={"/train-children.png"} // Replace with your image path
            alt="Moving Train"
            width={!isSmallScreen ? "40%" : "70%"}
            className={styles.train}
          />
        </Grid>
      </Grid>
      <div className={styles.homepadding}>
        {/* *****************************section 4***************************** */}
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing={1}>
          {/* <Grid item xs={12} md={12} lg={12} sm={12} sx={{ marginTop: "40px" }}>
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
          </Grid> */}
          {/* *****************************section 5***************************** */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ textAlign: "center", marginTop: "25px" }}
          >
            <div data-aos="fade-up" data-aos-duration="1000">
              <TypographyText
                Typography={<>Brand Portfolio</>}
                fontWeight="bolder"
                variant={"h5"}
                textAlign="centre"
              />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
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
            </div>
            <Buttons
              Buttonname={"Get in Touch"}
              fontWeight="500"
              bgcolor="#FFBC00"
              bgcolor1="red"
              color1="white"
              color="#001655"
            />
            <br />
          </Grid>
        </Grid>
      </div>

      {/* <Grid
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
        </Grid> */}
      {/********************************************************* */}
      <div className={styles.homepadding}>
        <Slider {...settings}>
          {data1?.map((curElem, index) => (
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              rowSpacing={1}
              sx={{ pt: "2%", pb: "2%" }}
              className={styles.homepadding2}
              key={index}
            >
              <div>
                {curElem.img ? (
                  // Render an image if curElem.img is available
                  <CardMedia
                    component="img"
                    image={curElem.img}
                    width={"100%"}
                    alt={""}
                    className="image-card"
                    sx={{ borderRadius: "25px", padding: "2%" }}
                  />
                ) : (
                  // Render a placeholder (skeleton) if curElem.img is not available
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
              </div>
            </Grid>
          ))}
        </Slider>
      </div>

      {/********************************************************* */}
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        rowSpacing={1}
        className={styles.homepadding2}
        sx={{marginTop:'20px',marginBottom:'40px'}}
      >
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
            style={{ borderRadius: "25px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        rowSpacing={1}
        sx={{
          pb: "2%",
          pt: "2%",
          //  backgroundColor:'#FDD995',
            backgroundImage: `url('/component.avif')`,
          paddingBottom: "40px",
          backgroundSize: "cover",
        }}
        className={styles.homepadding2}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{
            textAlign: "center",
          }}
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
                Bring your littles ones to the Meet and Greet of Gabby and
                little cakey from Gabbys Dollhouse for a fun evening of singing,
                dancing, coloring and a MEOWmazing experience!
                <br />
              </>
            }
          />
        </Grid>
        {data2?.map((curElem, index) => (
          <Grid item xs={4} md={3} lg={2.4} sm={3} key={index}>
            <div data-aos="fade-up">
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
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeSection2;
