import React from "react";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../src/styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CardActions, CardMedia, Grid } from "@mui/material";
export function TypographyText(props) {
  return (
    <Typography
      sx={{
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        paddingRight: props.paddingRight,
        fontWeight: props.fontWeight,
        transform: props.transform,
        margin: props.margin,
        marginTop:props.marginTop,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
      // fontFamily='Lato'
      fontFamily='Rubik'
      // font-family= 'Young Serif'

    >
      {props.Typography}
    </Typography>
  );
}

export function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        bgcolor: props.bgcolor,
        textTransform: props.textTransform,
        color: props.color,
        float: props.float,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        transform: props.transform,
  minWidth:'100px',
        // fontFamily: 'Lato',
        fontFamily:'Rubik',
        ":hover": {
          bgcolor: props.bgcolor1, // theme.palette.primary.main
          color: props.color1,
        },

        textTransform: "capitalize",
      }}
    >
      {props.Buttonname}
    </Button>
  );
}

export function HomeCard(props) {
  return (
    <Card className={styles.card}>
      <CardContent>
        <TypographyText
          variant="h5"
          component="div"
          // color={"#F4AF1B"}
          fontWeight={"bolder"}
          Typography={props.Typography}
        />

        <TypographyText
          component="div"
          // color={"white"}

          Typography={props.Typographybody}
        />
      </CardContent>
    </Card>
  );
}

export function DividerComp(props) {
  return (
    <div
      className={styles.sep}
      style={{
        margin: props.divmargin,
        // marginTop: "1%",
        marginBottom: "1%"
      }}
    ></div>
  );
}







export function Homecomponent1(props) {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const isSmallScreen2 = useMediaQuery("(max-width:450px)");
  return (
    <>
      {!isSmallScreen ? (
        <Grid
          container
          sx={{
            backgroundImage: props.backgroundImage,
            // backgroundPosition: "50% ",
            objectFit: "cover",
            width: "100%",
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
          }}
        >
          <Grid item lg={1} md={1}></Grid>
          <Grid item lg={7} md={8} sx={{ padding: "8%" }}>
            <Card sx={{ padding: "5%" }}>
              <CardContent sx={{ textAlign: "left" }}>
           

                <TypographyText
                fontWeight="600"
                variant={"h5"}
                textAlign="left"
                  Typography={props.h1}
                />

            
                <TypographyText
                  variant="body2"
                  Typography={props.Typography1}
                />
              </CardContent>

              <CardActions>
                <Buttons
                  Buttonname={props.Buttonname}
                  fontWeight="500"
                  bgcolor="#FFBC00"
                  bgcolor1="red"
                  color1="white"
                  color="#001655"
                />
               
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              sx={{
                aspectRatio: !isSmallScreen2 ? "3/1" : "3/2",
              }}
              image={props.image}
              alt="green iguana"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              paddingLeft: "10%",
              paddingRight: "10%",
              transform: "translatey(-10%);",
            }}
          >
            <Card>
              <CardContent sx={{ textAlign: "left" }}>
                <TypographyText
                  fontSize=" 14"
                  color="text.secondary"
                  Typography={props.Typography}
                />

                <TypographyText
                  variant="h5"
                  component="div"
                  Typography={props.h1}
                />

                <div className="sep"></div>
                <TypographyText
                  variant="body2"
                  Typography={props.Typography1}
                />
              </CardContent>

            
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
}


