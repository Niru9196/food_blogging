import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";

const Part = () => {
    const isWidthLessThan1000 = useMediaQuery("(max-width:1000px)");
    const isWidthLessThan1150 = useMediaQuery("(max-width:1150px)")
    return(
        <section>
            {isWidthLessThan1000 ? (
                <Grid container style ={{backgroundImage:
                    "linear-gradient(to bottom, rgba(30, 42, 93, 0.04), rgba(48, 62, 130, 0.04), rgba(60, 80, 157, 0.04))", height: '400px'}}>
                        <Grid item xs={12} md ={6} > 
                            <Grid item style ={{ marginTop: "107px"}}>
                                <h3 style={{
                                    fontSize: "45px",
                                    fontWeight: 600,
                                    lineHeight: "27px",
                                    color: "#0E2368",
                                    marginBottom: "27.41px",
                                    textAlign: 'center'
                                }}>
                                    About Us
                                </h3>
                                <p  style={{
                                    width: 275,
                                    height: 138,
                                    fontWeight: 400,
                                    lineHeight: "21px",
                                    fontSize: '11px',
                                    color: '#444957',
                                    textAlign: 'center',
                                    margin : '0 auto'
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. t has
                                    survived not only five centuries.
                                </p>
                                
                            </Grid>
                            <Grid item style = {{textAlign: 'center' }} >
                                <Button style = {{height: 25, width: 110, backgroundColor: "#E23744" , color: "white ", borderRadius: '21px' ,fontSize: '11px', letter: '-3%' , padding: '5px'}}>Read More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
            ) : (
                <Grid container style ={{backgroundImage:
                    "linear-gradient(to bottom, rgba(30, 42, 93, 0.04), rgba(48, 62, 130, 0.04), rgba(60, 80, 157, 0.04))",}}>
                        <Grid item xs={12} md ={6} >
                            <Grid item style = {{marginLeft: isWidthLessThan1150 ? " 150px" : '205px'}}>
                                <img src="/heroSection/decorate.png" alt="Title Image" style={{ height: 467, width: 384 }}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md ={6} > 
                            <Grid item style ={{ marginTop: "107px",marginLeft: '50px'}}>
                                <h3 style={{
                                    fontSize: "45px",
                                    fontWeight: 600,
                                    lineHeight: "27px",
                                    color: "#0E2368",
                                    marginBottom: "27.41px",
                                }}>
                                    About Us
                                </h3>
                                <p  style={{
                                    width: 370,
                                    height: 138,
                                    fontWeight: 400,
                                    lineHeight: "27px",
                                    fontSize: '15px',
                                    color: '#444957',
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. t has
                                    survived not only five centuries.
                                </p>
                                
                            </Grid>
                            <Grid item >
                                <Button style = {{height: 42, width: 132 , backgroundColor: "#E23744" , color: "white ", borderRadius: '21px' , marginTop: '21px', marginLeft: '50px'}}>Read More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
            )}
        </section>
    )
}

export default Part;