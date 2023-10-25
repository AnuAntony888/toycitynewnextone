import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { DividerComp, TypographyText } from "../../../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const HomeTreandingsection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const data = [
    {
      imageUrl: "/topseller.jpg",
      name: "Bitzee, Interactive Toy Digital Pet and Case with 15 Animals Inside.",
    },
    {
      imageUrl: "/topseller.jpg",
      name: "Bitzee, Interactive Toy Digital Pet and Case with 15 Animals Inside.",
    },
    {
      imageUrl: "/topseller.jpg",
      name: "Bitzee, Interactive Toy Digital Pet and Case with 15 Animals Inside.",
    },
    {
      imageUrl: "/topseller.jpg",
      name: "Bitzee, Interactive Toy Digital Pet and Case with 15 Animals Inside.",
    },
  ];

  return (
    <div className={styles.homepadding}>
      {/* *****************************section 3***************************** */}
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: isSmallScreen ? "0px" : "25px" }}
      >
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Treanding</>}
            fontWeight="bolder"
            variant={ "h5" }
            textAlign="centre"
          />

          {/* <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <DividerComp />
          </Grid> */}

          <TypographyText
            Typography={<>Check out our most trending products for fall 2023
            <br/></>}
            marginTop="10px"

          />
        </Grid>
        {data?.map((curElem) => (
          <Grid item xs={6} lg={3} md={3} sm={4} key={curElem.index}>
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box>
                <Box
                  sx={{
                    position: "relative",
                    margin: "auto",
                    cursor: "pointer",
                  }}
                >
                  {curElem.imageUrl ? (
                    <CardMedia
                      component="img"
                      image={curElem.imageUrl}
                      sx={{
                        height: "250px",
                        borderRadius: "25px",
                      }}
                      width={"100%"}
                      alt={""}
                      className="imag_card"
                    />
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={230}
                      sx={{
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                </Box>

                <CardContent
                  sx={{
                    padding: 0,
                    paddingBottom: "0px !important",
                    pt: "5px",
                  }}
                >
                  <p className={styles.flbrandtxt1}>{curElem?.name}</p>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeTreandingsection;
