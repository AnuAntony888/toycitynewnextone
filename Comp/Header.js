import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveHeader from "./ResponsiveHeader";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "90px" }}>
        <AppBar
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "90px",
            justifyContent: "space-between",
            position: "sticky !impoertant",
            top: "0px",
          }}
          position="fixed"
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {matches ? (
              <>
                <img
                  src={"/logo_new.png"}
                  width={130}
                  height={"auto"}
                  onClick={refreshPage}
                  style={{ marginTop: "10px" }}
                />
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
                </Box>
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
];
