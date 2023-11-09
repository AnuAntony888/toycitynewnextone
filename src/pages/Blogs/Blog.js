import React from 'react'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid } from '@mui/material';
import { TypographyText } from '../../../ReusableComponent/Reusab';
import styles from "../../styles/Home.module.css";
const Blog = () => {
          const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
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
              <Box sx={{ flexGrow: 1, paddingTop: '5%', paddingBottom: '5%' }}>
              <TypographyText textAlign="justify" Typography={<> Toy City is a one-stop shop for the world of toy distribution. We do a
          lot more than just selling your stock to the retailers. We ensure that
          enough footprint is built around it through, visual merchandising
                  creative marketing and product placement.
                      <br />
                      <br />
                  Toy City is a one-stop shop for the world of toy distribution. We do a
                  lot more than just selling your stock to the retailers. We ensure that
                  enough footprint is built around it through, visual merchandising
                  creative marketing and product placement.</>} />
                  
              </Box>
              </div>
    </div>
  )
}

export default Blog
