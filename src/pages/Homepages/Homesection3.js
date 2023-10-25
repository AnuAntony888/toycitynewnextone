import React from "react";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Homesection3 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={styles.homepadding}>
      {/* *****************************section 6***************************** */}
      <Grid container spacing={2} sx={{ paddingBottom: "30px" }}>
        <Grid item xs={12} md={7} lg={7} sm={12} sx={{margin:'auto'}}>
          <TypographyText
            Typography={<>Want to know more?</>}
            fontWeight="bolder"
            variant={"h5"}
            textAlign="left"
          />
     
          <TypographyText
            textAlign="left"
            marginTop='10px'
            Typography={
              <>
                Toy City is a one-stop shop for the world of toy distribution.
                We do a lot more than just selling your stock to the retailers.
                We ensure that enough footprint is built around it through,
                visual merchandising creative marketing and product placement.
                We currently work with 24 brands and have a tremendously
                effective team, experienced in managing operations, logistics
                and marketing. The team works hard and smart to enrich the brand
                experience at every stop from sell-in to sell-out by managing
                sales, in-store displays, events, advertising etc.
                <br />
                <br />
              </>
            }
          />
          <Buttons
            Buttonname={"Contact Us"}
            fontWeight="bolder"
            color="#272974"
            bgcolor="#F9CF37"
            bgcolor1="red"
            color1="white"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={5} sm={12}>
          <img src="/homecontact.jpg" alt="about_section" width={"100%"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homesection3;
