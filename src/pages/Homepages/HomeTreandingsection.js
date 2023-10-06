import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/Home.module.css";
const HomeTreandingsection = () => {
  const data = [{ imageUrl: "/banner1.jpg", name: "anu" }];

  const matches = useMediaQuery("(min-width:400px)");
  return (
    <div className={styles.homepadding}>
      <Grid container spacing={0}>
        {data?.map((curElem) => (
          <Grid item xs={6} lg={2.4} md={3} sm={4} key={curElem.index}>
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                "& .imag_card": {
                  zIndex: "-2000",
                  transition: "transform .3s, filter 1.5s ease-in-out",
                },
                ":hover": {
                  "& .imag_card": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <CardHeader
                avatar={
                  <>
                    <Avatar
                      className={styles.avatarContainer}
                      // sx={{
                      //   visibility: curElem?.product?.discount_price
                      //     ? "visible"
                      //     : "hidden",
                      // }}
                      variant="rounded"
                    >
                      10%
                    </Avatar>
                  </>
                }
              />
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
                        margin: "auto",
                        height: "230px",
                        objectFit: "contain",
                      }}
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
                    height: !matches ? "150px" : "120px",
                    padding: 0,
                    position: "relative",
                    zIndex: 1000,
                    padding: 0,
                    paddingTop: "2%",
                    cursor: "pointer",
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
