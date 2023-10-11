import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Banner from "../../../ReusableComponent/Banner";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../../styles/Home.module.css";
import {
  Buttons,
  DividerComp,
  TypographyText,
} from "../../../ReusableComponent/Reusab";
const Index = () => {
  const data = ["/about.webp"];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const datas = [
    {
      url: "url(/mission.jpg)",
      txt: "Instore branding",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/mission.jpg)",
      txt: "Advertising",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/vission.jpg)",
      txt: "launch events",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
    {
      url: "url(/vission.jpg)",
      txt: "Orientation programs ",
      txt2: (
        <>
          ToyCity aims to be the leading and most efficient toy distribution
          company in the MENA region. We are dedicated to delivering a wide
          range of high-quality toys, fostering joy and igniting imagination in
          the heart of children.
        </>
      ),
      button: "Read More",
    },
  ];

  return (
    <div>
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
            xs: "55vw",
          }}
        />
      </Grid>
      <Grid container spacing={2} className={styles.homepadding}>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <TypographyText
            Typography={<>Who We Are</>}
            fontWeight="bolder"
            variant={isSmallScreen ? "h5" : "h4"}
            textAlign="left"
          />
          <DividerComp />
          <TypographyText
            textAlign="left"
            Typography={
              <>
                We do more than simply ‘sell’ your inventory to merchants. As a
                specialist distributor in Saudi Arabia, we cater to the needs of
                specialty stores, standalone stores, and travel retail outlets.
                <br />
                <br />
                We ensure wide-spread visibility for our brands across the
                entire country through our strong partnerships with retailers,
                resulting in prominent in-store positioning for our brands. Our
                singular focus on the Saudi market is a major contributor to our
                success.
                <br />
                <br />
                We are currently working with 35+ brands with the aim of
                establishing international brands in the local markets. Our team
                consists of experienced and efficient members, delivering at
                multiple scales whilst maintaining an extraordinary experience.
                <br />
                <br />
                Our corporate office is located in Jeddah along with a dedicated
                showroom for our retail customers. We have well established
                infrastructure with a 1500 sqm warehouse and a delivery network
                across KSA. Our field executives cover all the major cities to
                ensure seamless sales and service in the region. <br />
                <br />
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12} sx={{ margin: "auto" }}>
          <img src="/homecontact.jpg" alt="about_section" width={"75%"} />
        </Grid>
        {/* *****************************section 2***************************** */}
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <Card
            sx={{
              backgroundImage: "url(/vission.jpg)",
              backgroundSize: "cover",
              p: "2%",
            }}
          >
            <CardContent>
              <TypographyText
                textAlign="centre"
                Typography={<>Our Mission</>}
                fontWeight="bolder"
                variant={"h5"}
              />

              <TypographyText
                textAlign="left"
                Typography={
                  <>
                    Our mission is to meticulously source, develop and market a
                    diverse range of children’s products. We are dedicated to
                    offering high quality toys and educational material that
                    kindle creativity, enhance motor skills, stimulate
                    imagination and foster a genuine love for learning in every
                    child. Our focus is on carefully curating our selection to
                    enrich the lives of our consumers while ensuring that the
                    element of fun is never compromised. We strive to become
                    go-to-choice for parents, caregivers, guardians and
                    educators in the Mena region, trusted for our unwavering
                    focus on safety, quality and innovation. Join us in creating
                    a world where children can thrive, explore, and grow through
                    the transformative power of play.
                  </>
                }
              />
              <br />
              <br />
              <Buttons
                Buttonname={"Read more"}
                fontWeight="bolder"
                color="#272974"
                bgcolor="#F9CF37"
                bgcolor1="red"
                color1="white"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <Card
            sx={{
              backgroundImage: "url(/mission.jpg)",
              backgroundSize: "cover",
              p: "2%",
            }}
          >
            <CardContent>
              <TypographyText
                textAlign="centre"
                Typography={<>Our Vission</>}
                fontWeight="bolder"
                variant={"h5"}
              />

              <TypographyText
                textAlign="left"
                Typography={
                  <>
                    ToyCity aims to be the leading and most efficient toy
                    distribution company in the MENA region. We are dedicated to
                    delivering a wide range of high-quality toys, fostering joy
                    and igniting imagination in the heart of children. Through
                    our commitment to excellence, we strive to provide
                    unparalleled service to our valued business partners and
                    customers, ensuring their success and satisfaction. We aim
                    to optimize efficiency in every aspect of our operations by
                    leveraging cutting-edge logistics, innovative technologies
                    and a passionate team of employees. Together with our
                    partners, we aspire to shape the toy industry, bringing
                    delight and happiness to every child in the MENA region.
                  </>
                }
              />
              <br />
              <br />
              <Buttons
                Buttonname={"Read more"}
                fontWeight="bolder"
                color="#272974"
                bgcolor="#F9CF37"
                bgcolor1="red"
                color1="white"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* *****************************section 2***************************** */}
      <Grid container spacing={2} className={styles.homepadding1} >
      
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
      <Grid container spacing={2} className={styles.homepadding}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            textAlign="centre"
            Typography={<>What We Offer</>}
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

          <TypographyText
            textAlign="left"
            Typography={
              <>
                At ToyCity, we specialize in crafting comprehensive marketing
                strategies tailored to your specific needs. We take pride in
                designing effective marketing plans, launch strategies and
                identifying Key Performance Indicators (KPIs) to ensure your
                brands success. With our expertise . we offer a complete 360
                marketing plan that aligns with your brand’s unique
                specifications and potential.
                <br />
                <br />
                Our dedicated team works diligently to ensure maximum brand
                exposure in the market. We understand the importance of a strong
                market presence, and thats why we prioritize your brands safety
                and success. When you partner with us, you can rest assured
                knowing that your brand is in capable hands. Together, well
                embark on a journey to launch your brand with precision,
                creativity, and unwavering commitment to achieving outstanding
                results.
              </>
            }
          />
        </Grid>
      </Grid>
      {/* *****************************section 4***************************** */}
      <Grid
        container
        spacing={2}
        className={styles.homepadding}
        sx={{ paddingBottom: "50px" }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>360 Marketing </>}
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
            <DividerComp />
          </Grid>
        </Grid>
        {datas.map((data, index) => (
          <Grid item xs={12} md={6} lg={3} sm={12} key={index}>
            <Card
              sx={{
                backgroundImage: data.url,
                backgroundSize: "cover",
                p: "2%",
              }}
            >
              <CardContent>
                <TypographyText
                  textAlign="centre"
                  Typography={data.txt}
                  fontWeight="bolder"
                  variant={'1.48rem'}
                />
                <TypographyText textAlign="left" Typography={data.txt2} />
                <br />
                <br />
                <Buttons
                  Buttonname={data.button}
                  fontWeight="bolder"
                  color="#272974"
                  bgcolor="#F9CF37"
                  bgcolor1="red"
                  color1="white"
                />
              
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* *****************************section 5***************************** */}
        <Grid item xs={12} md={12} lg={12} sm={12}>
        
          <TypographyText
            Typography={<>Get in Touch with us </>}
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
            <DividerComp />
          </Grid>
          <TypographyText
            Typography={<>Partner with us to build your brand’s presence.</>}
            fontWeight="bolder"
            variant={"1.23rem"}
            textAlign="centre"
          />{" "}
          <br />
          <br />
          <Buttons
            Buttonname={"Read more"}
            fontWeight="bolder"
            color="#272974"
            bgcolor="#F9CF37"
            bgcolor1="red"
            color1="white"
          />
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
