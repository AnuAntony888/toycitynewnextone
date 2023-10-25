import React from "react";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../src/styles/Home.module.css";

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
