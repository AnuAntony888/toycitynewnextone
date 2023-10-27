import React from "react";

import { Box, CardMedia, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "../../styles/Home.module.css";
import Banner from "../../../ReusableComponent/Banner";
import { DividerComp, TypographyText } from "../../../ReusableComponent/Reusab";

const Index = () => {

  const datas = [  { img: "/lego.webp" },
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
  return (
  <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: "url(/brandprotfoli.jpg)",
               backgroundSize: "cover",
              padding: isSmallScreen ? "50px" : "100px",
            }}
          >
          <TypographyText
            Typography={<>Brand Portfolio</>}
            fontWeight="bolder"
            variant={ "h5" }
            textAlign="centre"
          />
          </Box>
        </Grid>

</Grid>
     
      {/***************************section************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Grid item xs={12} md={12} lg={12} sm={12}>
        <TypographyText
            Typography={<>"Toycite" is a fun and catchy name for a toy store website. It conveys the idea of a place where people can find a variety of toys and playthings. When creating your website under this name, consider designing a vibrant and engaging online space to showcase your brand portfolio, attract customers, and provide a memorable shopping experience for toy enthusiasts.</>}
          textAlign='left'
         
          />
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
         <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Play Cosmetics</>}
            fontWeight="bolder"
            variant={"h6"}
            textAlign="centre"
          />
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
      </Grid>
   
    </>
  );
};

export default Index;
