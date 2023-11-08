import React from "react";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "@mui/material/Card";
import { TypographyText } from "../../../ReusableComponent/Reusab";
const index = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
                  {blogs.map((curElem) => {
                      return (
                          <Grid item xs={12} lg={3} md={4} sm={6} key={curElem.id}>
                              {/* <Link
                          to={`/blog/${convertToSlug(Text)}`}
                          state={{
                            id: curElem.id,
                          }}
                          className="link"
                        > */}
                              <Card className="list_body_all_offerzoone">
                                  <LazyLoadImage
                                      src={curElem.image}
                                      alt="blogimag1"
                                      className={styles.blog_image_list}
                                  />
                                  <CardContent
                                      sx={{
                                          maxHeight: "90px",
                                          minHeight: "90px",
                                          padding: "0",
                                      }}
                                  >
                                      <TypographyText
                                          textAlign="centre"
                                          Typography={curElem.txt1}
                                          fontWeight="bolder"
              
                                      />
                                      <TypographyText textAlign="left" Typography={curElem.txt2} />
                                  </CardContent>
                              </Card>

                              {/*                       
                        </Link> */}
                          </Grid>
                      );
                  } )}
        </Grid>
      </Box>
    </div>
  );
};

export default index;
const blogs = [
    {
        image: '/component.avif',
        txt1: "Toys and Games",
        txt2: (
          <>
            Toy City is a one-stop shop for the world of toy distribution. We do a
            lot more than just selling your stock to the retailers. We ensure that
            enough footprint is built around it through, visual merchandising
            creative marketing and product placement.
          </>
        ),
    }
]
