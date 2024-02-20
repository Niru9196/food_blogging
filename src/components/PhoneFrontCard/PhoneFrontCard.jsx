import { Grid, Button, useMediaQuery } from "@mui/material";

const MainSection = () => {
  const isBelow1000px = useMediaQuery("(max-width:1000px)");
  const isWidthLessThan700 = useMediaQuery("(max-width: 700px)");

  return (
    <div >
      {isBelow1000px ? (
        <Grid container sx={{ flexDirection: 'column' }}>
          
          <Grid item xs={12}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <img src="/Article/pizza.png" alt="Red Border above Main Image" style={{ width: '100%' }} />
              <img src="/Article/design.png" alt="Bigger Pizza for Bigger Screen" style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} />
            </div>
          </Grid>
          {isWidthLessThan700 ? (
            <Grid item xs={12}>
            <div style={{ textAlign: 'center',}}>
              <h1 style={{ color: "#0E2368",width: '200px' ,height: '130px' , margin: ' 0 auto' , marginTop: '60px' }}>
                Discover the <span style={{ color: "#E23744" }}>Best</span> Food and Drinks
              </h1>
              <p style = {{height: '36px' , width: '280px' , margin: '0 auto', marginBottom: '28px'}}>
                Naturally made Healthcare Products for the better care & support of your body.
              </p>
              <Button style={{ backgroundColor: "#E23744", color: "white", borderRadius: "34px", fontWeight: 700 }}>
                Explore Now
              </Button>
            </div>
          </Grid>
          ) : (
            <Grid item xs={12}>
            <div style={{ textAlign: 'center',}}>
              <h1 style={{ color: "#0E2368",width: '400px' ,height: '230px' , margin: ' 0 auto' , marginTop: '220px' , fontSize: '60px' }}>
                Discover the <span style={{ color: "#E23744" }}>Best</span> Food and Drinks
              </h1>
              <p style = {{height: '36px' , width: '380px' , margin: '0 auto', marginBottom: '32px' , fontSize: '22px'}}>
                Naturally made Healthcare Products for the better care & support of your body.
              </p>
              <Button style={{ backgroundColor: "#E23744", color: "white", borderRadius: "34px", fontWeight: 700 , width: '170px' , height: '40px'}}>
                Explore Now
              </Button>
            </div>
          </Grid>
          )}
        </Grid>
      ) : (
        <Grid container>
      <Grid item xs={12} sm ={12} md={6} >
        <Grid item md ={12} style={{ position: "absolute", top: "33px", left: "100px" }}>
          <img src = '/Article/logo.png' alt="logo" />
        </Grid>
        <Grid item md ={6.5} style={{
              fontSize: "36px",
              fontWeight: 700,
              marginTop: "-10px",
              color: "#0E2368",
              marginTop: '227px',
              marginLeft: '100px'
            }}>
          <h1>
            Discover the <span style={{ color: "#E23744" }}>Best</span> Food and Drinks
        </h1>
        </Grid>
        <Grid item md ={5} style={{
              fontSize: "16.44px",
              lineHeight: "27.41px",
              fontWeight: 400,
              marginBottom: "40px",
              marginTop: '10px',
              marginLeft: '100px'
            }}>
          <p>
            Naturally made Healthcare Products for the better care & support of your body.
          </p>
        </Grid>
        <Button style={{
              width: "190px",
              height: "60px",
              color: "white",
              backgroundColor: "#E23744",
              borderRadius: "34px",
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: '100px'
            }}>Explore Now</Button>
      </Grid>
      <Grid item xs = {12} md = {6}>
        <Grid item xs = {12} sm = {12} md = {6} sx = {{position :'relative'}} >
          <img src="/Article/design.png" alt="Red Border above Main Image" style = {{position: 'absolute', zIndex: '3'}} />
          <img src="/Article/pizza.png" alt="Bigger Pizza for Bigger Screen " style = {{position : 'absolute'}} />
        </Grid>
      </Grid>
    </Grid>
      )}
    </div>
  );
};

export default MainSection;
