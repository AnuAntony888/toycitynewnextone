import React from "react";
import Banner from "../../../ReusableComponent/Banner";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Buttons, TypographyText } from "../../../ReusableComponent/Reusab";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
const Index = () => {
  const data = ["/th.jpeg"];
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
      <Grid
        container
        spacing={2}
        className={styles.homepadding2}
        sx={{ paddingBottom: "50px", pt: "20px" }}
      >
        {/**********************section1************************************ */}
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <List>
            <ListItem sx={{ pl: 0, padding: "0" }}>
              <TypographyText
                Typography={"Address"}
                variant={"1.10rem"}
                fontWeight="600"
              />
            </ListItem>

            {Address.map((data, index) => (
              <ListItem className={styles.listitems} key={index}>
                <ListItemIcon className="footlistliwidth">
                  {data.SocialIcon}
                </ListItemIcon>
                <ListItemText className="list_text">
                  <TypographyText Typography={data.text} fontWeight="bolder" />
                  <TypographyText Typography={data.text1} fontSize=".9rem" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem sx={{ pl: 0, padding: "0" }}>
              <TypographyText
                Typography={"Email"}
                variant={"1rem"}
                fontWeight="600"
              />
            </ListItem>

            {Address1.map((data, index) => (
              <ListItem className={styles.listitems} key={index}>
                <ListItemIcon className="footlistliwidth">
                  {data.SocialIcon}
                </ListItemIcon>
                <ListItemText className="list_text">
                  <TypographyText Typography={data.text1} fontSize=".9rem" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem sx={{ padding: "0" }}>
              <TypographyText
                Typography={"Phone"}
                variant={"1rem"}
                fontWeight="600"
              />
            </ListItem>

            {Address2.map((data, index) => (
              <ListItem className={styles.listitems} key={index}>
                <ListItemIcon className="footlistliwidth">
                  {data.SocialIcon}
                </ListItemIcon>
                <ListItemText className="list_text">
                  <TypographyText Typography={data.text1} fontSize=".9rem" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem sx={{ padding: "0" }}>
              <TypographyText
                Typography={"Website"}
                variant={"1rem"}
                fontWeight="600"
              />
            </ListItem>

            {Address3.map((data, index) => (
              <ListItem className={styles.listitems} key={index}>
                <ListItemIcon className="footlistliwidth">
                  {data.SocialIcon}
                </ListItemIcon>
                <ListItemText className="list_text">
                  <TypographyText Typography={data.text1} fontSize=".9rem" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        {/**********************section1************************************ */}
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
              <p style={{ textAlign: "left", paddingBottom: "15px" }}>Name</p>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "white" }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <p style={{ textAlign: "left", paddingBottom: "15px" }}>Email</p>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <p style={{ textAlign: "left", paddingBottom: "15px" }}>Phone</p>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <p style={{ textAlign: "left", paddingBottom: "15px" }}>
                Message
              </p>
              <TextField
                fullWidth
                label="Message"
                id="outlined-multiline-flexible"
                size="small"
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <Buttons
                Buttonname={"Contact Us"}
                fontWeight="bolder"
                color="#272974"
                bgcolor="#F9CF37"
                bgcolor1="red"
                color1="white"
                textAlign="left"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
const Address = [
  {
    SocialIcon: <HomeIcon sx={{ color: "black" }} />,
    text: <> Corporate Office</>,
    text1: (
      <>
        PO Box No : 87665, Suite No : 521, Block B,
        <br />
        Business Village, Opp Clock Tower, Deira,
        <br />
        Dubai, United Arab Emirates.
      </>
    ),
  },
  {
    SocialIcon: <HomeIcon sx={{ color: "black" }} />,
    text: <> Saudi Distribution Office</>,
    text1: (
      <>
        Al Khomra, Faisal St, PO Box No : 14335,
        <br />
        Jeddah, Saudi Arabia.
      </>
    ),
  },
];

const Address1 = [
  {
    SocialIcon: <EmailIcon sx={{ color: "black" }} />,

    text1: <>rajiv@toycity.me</>,
  },
];
const Address2 = [
  {
    SocialIcon: <PhoneIcon sx={{ color: "black" }} />,

    text1: <>+971 55 2101764</>,
  },
];
const Address3 = [
  {
    SocialIcon: <PublicIcon sx={{ color: "black" }} />,

    text1: <>www.toycity.me</>,
  },
];
