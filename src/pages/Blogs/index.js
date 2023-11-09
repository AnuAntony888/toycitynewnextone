import React from "react";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "@mui/material/Card";
import { TypographyText } from "../../../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
const Index = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (<>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: "url(/secondlast.avif)",
              backgroundSize: "cover",
              padding: isSmallScreen ? "100px" : "150px",
            }}
          >
            <TypographyText
              Typography={<>Blogs</>}
              fontWeight="bolder"
              variant={"h5"}
              textAlign="centre"
            />
          </Box>
        </Grid>
      </Grid>
    
    <div className={styles.homepadding} >
      <Box sx={{ flexGrow: 1 ,paddingTop:'5%',paddingBottom:'5%'}}>
        <Grid container spacing={2}>
                  {blogs.map((curElem) => {
                      return (
                          <Grid item xs={12} lg={3} md={4} sm={6} key={curElem.id}>
                         <Link href='/Blogs/Blog'>
                              <Card >
                                  <LazyLoadImage
                                      src={curElem.image}
                                      alt="blogimag1"
                                      className={styles.blog_image_list}
                                  />
                                  <CardContent
                                      sx={{
                                        margin:'2px'
                                      }}
                                  >
                                      <TypographyText
                                          textAlign="centre"
                                          Typography={curElem.txt1}
                                          fontWeight="bolder"
              
                                      />
                              <TypographyText textAlign="justify" Typography={curElem.txt2} />
                          
                                  </CardContent>
                              </Card>

                                                    
                        </Link>
                          </Grid>
                      );
                  } )}
        </Grid>
      </Box>
    </div>
  </>);
};

export default Index;
const blogs = [
    {
        image: '/component.avif',
        txt1: "Toys and Games",
        txt2: (
          <>
            Toy City is a one-stop shop for the world of toy distribution. 
          </>
        ),
  }
  ,
  {
    image: '/component.avif',
    txt1: "Toys and Games",
    txt2: (
      <>
        Toy City is a one-stop shop for the world of toy distribution. 
      </>
    ),
  },
  {
    image: '/component.avif',
    txt1: "Toys and Games",
    txt2: (
      <>
        Toy City is a one-stop shop for the world of toy distribution. 
      </>
    ),
}
]
