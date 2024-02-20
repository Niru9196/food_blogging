import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";

const Blog = () => {
  const isWidthLessThan1100 = useMediaQuery("(max-width:1200px)");
  const isWidthLessThan500 = useMediaQuery("(max-width:500px)");

  return (
    <section style={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          width: "100vw",
          height: 467,
          marginTop: "20%",
          backgroundImage:
            "linear-gradient(to bottom, rgba(30, 42, 93, 0.04), rgba(48, 62, 130, 0.04), rgba(60, 80, 157, 0.04))",
        }}
      >
        <Grid item style={{ margin: "0 auto" }}>
          <Grid container spacing={2}>
            {!isWidthLessThan1100 && (
              <Grid
                item
                md={4}
                xs={12}
                style={{ marginLeft: isWidthLessThan1100  ?"50px" : "100px", marginTop: "-17px" }}
              >
                <img
                  src="/heroSection/decorate.png"
                  alt="Title Image"
                  style={{ height: 467, width: 384 }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={3} style={{ marginRight : isWidthLessThan1100 ? "0px" : "250px", marginLeft: isWidthLessThan1100 ?'0px' : "150px",}}>
              <Typography
                variant="body1"
                style={{
                  fontSize: "45px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  color: "#0E2368",
                  marginTop: "107px",
                  marginBottom: "27.41px",
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                style={{
                  width: 447,
                  height: 138,
                  fontWeight: 400,
                  fontSize:isWidthLessThan500 ? "10px": "15px",
                  lineHeight: "27px",
                  flexWrap: isWidthLessThan1100 ? "wrap": "",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </Typography>
              <Button style = {{height: 42, width: 132 , backgroundColor: "#E23744" , color: "white ", borderRadius: '21px' , marginTop: '21px'}}>Read More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Blog;
