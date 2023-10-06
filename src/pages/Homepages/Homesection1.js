import { Grid } from "@mui/material";
import React from "react";
import Banner from "../../../ReusableComponent/Banner";
import styles from "../../styles/Home.module.css";
import { Buttons, DividerComp, TypographyText } from "../../../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Homesection1 = () => {
  const data = ["/banner1.jpg"];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (<>
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
            xs: "46vw",
          }}
        />
      </Grid>
      <Buttons
        Buttonname={"Get in Touch"}
        fontWeight="bolder"
        color="#272974"
        bgcolor="#F9CF37"
        bgcolor1="red"
        color1="white"
        float={isSmallScreen ? "centre" : "right"}
        transform={
          isSmallScreen ? "translate(0, -50px)" : "translate(-200px, -150px)"
        }
      />
    </div>
   {/* *****************************section 2***************************** */}
   <div className={styles.homepadding}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <TypographyText
            Typography={<>About Us</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h5" : "h6"}
            textAlign="left"
          />
          <DividerComp />
          <TypographyText
            textAlign="left"
            Typography={
              <>
                Toy City is a one-stop shop for the world of toy distribution.
                We do a lot more than just selling your stock to the retailers.
                We ensure that enough footprint is built around it through,
                visual merchandising creative marketing and product placement.
                <br />
                <br />
                We currently work with 24 brands and have a tremendously
                effective team, experienced in managing operations, logistics
                and marketing. The team works hard and smart to enrich the brand
                experience at every stop from sell-in to sell-out by managing
                sales, in-store displays, events, advertising etc.
                <br />
                <br />
                We are the first toy-distributor in Saudi Arabia that complies
                with e-cosma &amp; GCTS/Saber certification (SASO Procedures)
                for all the products lines we address.
                <br />
                <br />
              </>
            }
          />
          <Buttons
            Buttonname={"Read more"}
            fontWeight="bolder"
            color="#272974"
            bgcolor="#F9CF37"
            bgcolor1="red"
            color1="white"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <img src="/About-Us_vector.png" alt="about_section" width={"75%"} />
        </Grid>
      </Grid>
      
    </div>

  </>);
};

export default Homesection1;
