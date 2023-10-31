import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import { DividerComp, TypographyText } from "../../../ReusableComponent/Reusab";
import styles from "../../styles/Home.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "aos/dist/aos.css";
import AOS from "aos";
const Index = () => {
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
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: "url(/pinkabout.jpg)",
              backgroundSize: "cover",
              padding: isSmallScreen ? "100px" : "150px",
            }}
          >
            <TypographyText
              Typography={<>Our Trusted Partners</>}
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
        className={styles.homepadding2}
        sx={{ paddingBottom: "50px", pt: "20px" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <TypographyText
              Typography={<>International and Regional Partners</>}
              fontWeight="600"
              variant={"h5"}
              textAlign="centre"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <TypographyText
              Typography={
                <><br/>
                  International partners are organizations or companies from
                  around the world that we collaborate with to reach a broader
                  audience, expand our market presence, and work together on
                  global initiatives.
                  <br />
                  <br />
                  Regional partners are local or nearby organizations that we
                  team up with to enhance our presence in specific geographic
                  areas, ensuring that our products or services are
                  well-received by local communities and customers.
                </>
              }
              textAlign="justify"
            />
          </div>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt="brand_image"
              width={"100%"}
              sx={{ borderRadius: "30px" }}
            />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <TypographyText
              Typography={<>Retail Partners</>}
              fontWeight="600"
              variant={"h5"}
              textAlign="centre"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <TypographyText
              Typography={
                <><br/>
                  Retail partners are trusted businesses that work with us to
                  make our products or services available to a wider audience.
                  They provide a physical or online platform for customers to
                  access and purchase our offerings, helping us reach and serve
                  more people effectively.
                </>
              }
              textAlign="justify"
            />
          </div>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={4} md={2.4} lg={1.5} sm={3} key={index}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt="brand_image"
              width={"100%"}
              sx={{ borderRadius: "30px" }}
            />
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundImage: "url(/green.jpg)",
                  backgroundSize: "cover",
                  padding: isSmallScreen ? "50px" : "70px",
                  borderRadius: "25px",
                }}
              >
                <div data-aos="fade-up" data-aos-duration="1000">
                  <TypographyText
                    Typography={<>What Our Partners Say about us</>}
                    fontWeight="600"
                    variant={"h5"}
                    textAlign="centre"
                  />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000">
                  <TypographyText
                    Typography={
                      <>
                        Our brand portfolio includes wide range of products
                        which covers all categories suitable for different age
                        groups
                      </>
                    }
                    marginTop="10px"
                    textAlign="centre"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {Data.map((post, index) => (
          <Grid lg={4} md={4} sm={6} xs={12} key={index}>
            <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
              <CardContent>
                <TypographyText
                  Typography={post.text}
                  textAlign={"left"}
                  fontSize={".9rem"}
                />
              </CardContent>

              <CardActions sx={{ float: "right" }}>
                <img src={post.img} alt="logo" width={53} />
                &nbsp;&nbsp;
                <TypographyText
                  Typography={post.text1}
                  textAlign={"right"}
                  variant={"h6"}
                />
              </CardActions>
            </Card>
            <TypographyText
              Typography={post.text2}
              textAlign={"right"}
              fontSize=".8rem"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Index;
const Data = [
  {
    text: (
      <>
        &ldquo;On behalf of my team it is my pleasure to compliment you and your
        team on 10-10 collaboration.
        <br />
        Your teams rapid responses goes a long way in making for a very smooth
        day to day, and thus having a very high internal score card. Keep up the
        great&rdquo;
      </>
    ),
    text1: "Allan Rabie",
    img: "/Testmonel/TM_1.png",
    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;You and your team are doing a fantastic job by bringing in the
        right products at the right time, and the customer service is
        consistently doing good, please continue the same&rdquo;
      </>
    ),
    text1: "Nowshar Hussain",
    img: "/Testmonel/TM_2.png",
    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;Zuru has been working for 1 year with Toycity and is happy to say
        that we are having a smooth and proactive cooperation towards the same
        goal which is growing the business in Saudi Arabia&rdquo;
      </>
    ),
    text1: "Lorenz Pirlot",
    img: "/Testmonel/TM_3.jpg",
    text2: " Sales and Marketing Manager – International",
  },
  {
    text: (
      <>
        &ldquo;The focused strategy, the determination, the execution, the
        follow up and the follow through, all makes us extremely proud and
        confident the ToyCity with no doubt will be among the top players
        shaping the distribution business in KSA&rdquo;
      </>
    ),
    text1: "Fawaz Abidin",
    img: "/Testmonel/TM_4.jpg",
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;Toy City has been a great KSA partner for PINCA. They have great
        relationships with the major retailers and have an excellent
        distribution network. We look forward to a consistent year on year
        growth for our business with Toy City in KSA&rdquo;
      </>
    ),
    text1: "Payal Mirchandani",
    img: "/Testmonel/TM_5.jpg",
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;With many moving parts, the ToyCity team was excellent to work
        with and responded in a timely manner in helping to advance the
        project&rdquo;
      </>
    ),
    text1: "Ken Danielsen",
    img: "/Testmonel/TM_6.jpg",
    text2: " International Sales Director",
  },
];
