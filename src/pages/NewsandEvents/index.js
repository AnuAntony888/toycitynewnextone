import { CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import styles from "../../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Index = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const newsandevents = [
    {
      backgroundImage: "url(/vission.jpg)",
      img:'/brandbanner.jpeg',
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
      backgroundImage: "url(/mission.jpg)",
      img:'/brandbanner.jpeg',
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
      backgroundImage: "url(/vission.jpg)",
      img:'/brandbanner.jpeg',
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
      <Grid container spacing={2} className={styles.homepadding} sx={{pb:'50px'}}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            textAlign="centre"
            Typography={<>News And Events</>}
            fontWeight="bolder"
            variant={isSmallScreen ? "h5" : "h4"}
          />
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <DividerComp />
          </Grid>
        </Grid>
        {newsandevents.map((data, index) => (
          <Grid item xs={12} md={4} lg={4} sm={12} key={index}>
                 
            <CardMedia
            component="img"
            alt="card"
                width={'100%'}
            image={data.img}
          />   <CardContent
          sx={{
            backgroundImage: data.backgroundImage,
            backgroundSize: "cover",
            p: "10px",
         
          }}
        >  
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
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Index;
