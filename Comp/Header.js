import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Link from "next/link";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          width: "100%",

          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
            <>
              <img
                src={"/logo_new.png"}
                width={150}
                height={"auto"}
                onClick={refreshPage}
              />
              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "darkblue",
                      fontWeight: "600",

                      fontSize: ".9rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              <img
                src={"/logo_new.png"}
                width={150}
                height={"auto"}
                onClick={refreshPage}
              />
              {/* 
              <ResponsiveHeader /> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
export const navItems = [
  <Link href="#">Home</Link>,
  <Link href={"/Aboutus"}>About Us</Link>,
  <Link href={"/brands"}>Brands</Link>,
  <Link href={"/Partners"}>Partners</Link>,
  <Link href={"/newsandevents"}>News and events</Link>,
  <Link href={"/Contact"}>Contact</Link>,
];
