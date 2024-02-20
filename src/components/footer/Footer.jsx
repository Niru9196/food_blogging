import React from 'react';
import { Grid, useMediaQuery } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const isWidthLessThan700 = useMediaQuery("(max-width: 700px)")
  const isScreenLessThan1250px = useMediaQuery("(max-width: 1100px)")

  return (
    <div>
      {isSmallScreen ? (
        <Grid container style={{ backgroundColor: '#F8F8F8', height: '880px', padding: '20px', marginTop: '3030px' }}>
        <Grid item xs={12} md={3} style ={{display: 'flex' , justifyContent: isWidthLessThan700 ? 'center' : '' ,}} >
          <img src='/Article/logo.png' alt='Company Logo' style={{ marginTop: '52px' }} />
        </Grid>
        <Grid item xs={12} md={3} style={{marginTop: '84px'}}>
          <h3 style ={{marginBottom: '18px',fontSize: '19px' , fontWeight: 600, color: '#0E2368', marginLeft: '20px'}}>Contact Us</h3>
          <address style ={{width: '217px' , color: '#646874', marginLeft: '20px'}}>
            <p style = {{fontSize: '15px', lineHeight: '23px'}}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p style ={{marginTop: '14px', fontSize: '15px'}}>example2020@gmail.com</p>
            <p style = {{marginTop: '14px', fontSize: '15px' }}>(904) 443-0343</p>
          </address>
        </Grid>
        <Grid item xs={12} md={3} style={{marginTop: '84px'}}>
          <h3 style ={{marginBottom : '18px',textAlign: 'left',fontSize: '19px' , fontWeight: 600, color: '#0E2368',marginLeft: '20px'}}>More</h3>
          <ul style={{ listStyle: 'none', padding: 0 ,color: '#646874', marginLeft: '20px' }}>
            <li  >About Us</li>
            <li style ={{marginTop: '20px'}}>Products</li>
            <li style ={{marginTop: '20px'}}>Career</li>
            <li style ={{marginTop: '20px'}}>Contact Us</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} style={{ textAlign: 'center',marginTop: '84px' , color: '#0E2368' }}>
        <p style ={{textAlign: 'center', width: '100vw', }}>© 2022 Food Truck Example</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '7px' ,marginTop: '12px'}}>
            <li style={{ color: '#0E2368',  }}><InstagramIcon /></li>
            <li style={{ color: '#0E2368', marginLeft: '21px' , marginRight: '21px' }}><TwitterIcon /></li>
            <li style={{ color: '#0E2368',  }}><FacebookOutlinedIcon /></li>
          </ul>
        </Grid>
      </Grid>
      ) : (
        <Grid container style={{ backgroundColor: '#F8F8F8', height: '362px', padding: '20px' }}>
        <Grid item xs={12} md={3} >
          <img src='/Article/logo.png' alt='Company Logo' style={{marginLeft: isScreenLessThan1250px ? "50px" :  '103px' , marginTop: '123px' }} />
        </Grid>
        <Grid item xs={12} md={3} style={{marginTop: '84px'}}>
          <h3 style ={{marginBottom: '18px',fontSize: '19px' , fontWeight: 600, color: '#0E2368', marginLeft: isScreenLessThan1250px? '20px': '70px'}}>Contact Us</h3>
          <address style ={{width: '217px' , color: '#646874', marginLeft: isScreenLessThan1250px? '20px': '70px'}}>
            <p style = {{fontSize: '15px', lineHeight: '23px'}}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p style ={{marginTop: '14px', fontSize: '15px'}}>example2020@gmail.com</p>
            <p style = {{marginTop: '14px', fontSize: '15px' }}>(904) 443-0343</p>
          </address>
        </Grid>
        <Grid item xs={12} md={3} style={{marginTop: '84px'}}>
          <h3 style ={{marginBottom : '18px',textAlign: 'center',fontSize: '19px' , fontWeight: 600, color: '#0E2368'}}>More</h3>
          <ul style={{ listStyle: 'none', padding: 0 ,marginLeft: isScreenLessThan1250px ? '95px': '140px',color: '#646874' }}>
            <li  >About Us</li>
            <li style ={{marginTop: '20px'}}>Products</li>
            <li style ={{marginTop: '20px'}}>Career</li>
            <li style ={{marginTop: '20px'}}>Contact Us</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} style={{ textAlign: 'center',marginTop: '84px' , color: '#0E2368' }}>
          <h3 style ={{fontSize: '19px' , fontWeight: 600}}>Social Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '7px' }}>
            <li style={{ height: 69, width: 69, color: '#0E2368', display: 'grid', placeItems: 'center' }}><InstagramIcon /></li>
            <li style={{ height: 69, width: 69, color: '#0E2368', display: 'grid', placeItems: 'center' }}><TwitterIcon /></li>
            <li style={{ height: 69, width: 69, color: '#0E2368', display: 'grid', placeItems: 'center' }}><FacebookOutlinedIcon /></li>
          </ul>
        </Grid>
        <p style ={{textAlign: 'right', width: '100vw', marginRight: isScreenLessThan1250px ? '50px': '120px', marginBottom: '100px'}}>© 2022 Food Truck Example</p>
      </Grid>
      )}
      
    </div>
  );
}

export default Footer;
