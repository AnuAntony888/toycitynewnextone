import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveHeader from "./ResponsiveHeader";
import "aos/dist/aos.css";
import AOS from "aos";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TypographyText } from "../ReusableComponent/Reusab";
export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }
  React.useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          // marginBottom: "90px"
          marginBottom: matches ? "120px" : "80px",
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "white",
            width: "100%",
            // height: "90px",
            height: matches ? "120px" : "80px",
            justifyContent: "space-between",
            position: "sticky !impoertant",
            top: "0px",
            boxShadow: "none",
          }}
          position="fixed"
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {matches ? (
              <>
                {/* <div data-aos="fade-up" data-aos-duration="1000">
                <img
                  src={"/logo_new.png"}
                  width={130}
                  height={"auto"}
                  onClick={refreshPage}
                  style={{ marginTop: "10px" }}
                  />
                  </div>
                <Box>
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "darkblue",
                        fontWeight: "500",

                        fontFamily: "Rubik",
                        fontSize: ".9rem",
                        textTransform: "capitalize",
                        marginTop: "40px",
                        minWidth: "85px",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box> */}

                <Grid container spacing={2} sx={{ marginTop: "1px" }}>
                  <Grid item xs={3}>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        marginTop: "6%",
                        justifyContent: 'start',
                        marginLeft:'20px !important'
                      }}
                    >
                      {Socialicon.map((data, index) => (
                        <Grid item key={index} >
                          {data.icon}
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                      <img
                        src={"/logo_new.png"}
                        width={120}
                        height={"auto"}
                        onClick={refreshPage}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={3}>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        marginTop: "8%",
                        justifyContent: 'end',
                 
                      }}
                    >
                      <Button
                        sx={{
                          color: "darkblue",
                          fontWeight: "500",
                          marginRight:'20px  !important',
                          fontFamily: "Rubik",
                          fontSize: ".9rem",
                          textTransform: "lowercase",

                          minWidth: "85px",
                        }}
                      >
                        sales@toycity.me
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sx={{ paddingTop: "0 !important" }}>
                    <hr style={{marginTop:'2px',backgroundColor:'darkblue',color:'darkblue'}}/>
                    {navItems.map((item) => (
                      <Button
                        key={item}
                        sx={{
                          color: "darkblue",
                          fontWeight: "500",
marginTop:'-5px',
                          fontFamily: "Rubik",
                          fontSize: ".9rem",
                          textTransform: "capitalize",

                          minWidth: "120px",
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <img
                  src={"/logo_new.png"}
                  width={130}
                  height={"auto"}
                  onClick={refreshPage}
                />
                <ResponsiveHeader />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export const navItems = [
  <Link href="/">Home</Link>,
  <Link href={"/Aboutus"}>About Us</Link>,
  <Link href={"/Brands"}>Brands</Link>,
  <Link href={"/Partners"}>Partners</Link>,
  <Link href={"/NewsandEvents"}>News and events</Link>,
  <Link href={"/Contact"}>Contact</Link>,
  <Link href={"/Blogs"}>Blogs</Link>,
];
const Socialicon = [
  {
    icon: <FacebookIcon sx={{ color: "darkblue" }} />,
  },
  {
    icon: <TwitterIcon sx={{ color: "darkblue" }} />,
  },
  {
    icon: <InstagramIcon sx={{ color: "darkblue" }} />,
  },
];
