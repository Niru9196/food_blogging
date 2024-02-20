import Card from "./components/Card/Card";
import React, { useState } from "react";
import Part2 from './components/heroSection/Part2'
import PhoneFrontCard from './components/PhoneFrontCard/PhoneFrontCard'
import CardCollection from "./components/CardCollection/CardCollection";
import Footer from './components/footer/Footer'
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";


function App() {
  const isWidthLessThan1000 = useMediaQuery("(max-width: 1000px)")
  return (
    <div>
      <main>
        <PhoneFrontCard />
        <section style ={{marginTop: isWidthLessThan1000 ? '70px' : '300px'}}>
          <Part2 />
        </section>
        <section style ={{marginTop: isWidthLessThan1000 ? '80px' : '100px', marginBottom : isWidthLessThan1000 ? '' : '50px'}}>
          <CardCollection />
        </section>
        
      </main>
      <Footer style={{ backgroundColor: "green" }} />
    </div>
  );
}

export default App;
