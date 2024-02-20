import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from "@mui/material";
import { vegetable } from "../Data/Data";
import Card from '../Card/Card'

const CardCollection = () => {
    const isWidthLessThan1000 = useMediaQuery("(max-width: 1000px)");

    const itemsPerPage = 3;

    console.log("data: ", vegetable);

    // Calculate total number of pages
    const totalPages = Math.ceil(vegetable.length / itemsPerPage);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // Function to handle page navigation
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    // Function to navigate to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to navigate to the next page
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            {isWidthLessThan1000 ? (
                <div style={{ height: '679px', display: 'flex' , flexDirection: 'column'}}>
                    <h1 style ={{fontSize: '28px' , letter: '4%' , color: '#0E2368', marginBottom: '23px', textAlign: 'center',lineHeight:'54px',}}>Latest Articles</h1>
                    <div style ={{display: 'flex', justifyContent: "space-evenly", flexDirection:'column' , gap: '61px',paddingLeft: '10px' , paddingRight: '10px' ,margin: '0 auto'}}>
                        {vegetable.map((item, index) => (
                            <Card key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div style={{ height: '679px'}}>
                        <h1 style ={{fontSize: '56px' , letter: '4%' , color: '#0E2368', marginBottom: '46px', marginLeft: '90px'}}>Latest Articles</h1>
                        <div style ={{display: 'flex', justifyContent: "space-evenly"}}>
                            {vegetable.slice(startIndex, endIndex).map((item, index) => (
                                <Card key={index} title={item.title} image={item.image} />
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: "center", display: 'flex' , width: '100vw', justifyContent:'center', marginTop: '44px'}}>
                        <IconButton onClick={goToPreviousPage} disabled={currentPage === 1}  style={{ transform: "rotate(270deg)" }}>
                            <ExpandLessIcon style ={{border : '1px solid #424961', borderRadius : '5px'}} />
                        </IconButton>
                        <p style ={{marginTop:'10px' , fontSize: '22px' , color: '#424961'}}>1/2</p>
                        <IconButton onClick={goToNextPage} disabled={currentPage === totalPages} style={{ transform: "rotate(270deg)" }}>
                            <ExpandMoreIcon style ={{border : '1px solid #424961', borderRadius : '5px'}}/>
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardCollection;
