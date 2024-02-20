import React from "react";
import { Button } from "@mui/material";

const Blog = () => {
  return (
    <div
      style={{
        height: 804,
        width: "100vw",
        display: "flex",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
      }}
    >
      <div style={{ width: "50%" }}>
        <div style={{ position: "absolute", top: "33px", left: "100px" }}>
        {window.innerWidth <= 1000 ? null : (
            <img
              src="/Article/logo.png"
              alt="Logo"
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: "227px",
            left: "100px",
          }}
        >
          <h1
            style={{
              height: 207,
              width: 345,
              fontSize: "62px",
              fontWeight: 700,
              marginTop: "-10px",
              color: "#0E2368",
            }}
          >
            Discover the <span style={{ color: "#E23744" }}>Best</span> Food and
            Drinks
          </h1>
          <p
            style={{
              width: "325px",
              height: "55px",
              marginTop: "-20px",
              fontSize: "16.44px",
              lineHeight: "27.41px",
              fontWeight: 400,
              marginBottom: "40px",
            }}
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button
            style={{
              width: "190px",
              height: "63px",
              color: "white",
              backgroundColor: "#E23744",
              borderRadius: "34px",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Explore Now
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "column", // Default flexDirection is column
          "@media (max-width: 1000px)": {
            flexDirection: "column-reverse", // Change flexDirection on smaller screens
          },
        }}
      >
        <Button
          style={{
            position: "absolute",
            top: "32px",
            right: "50px",
            zIndex: "3",
            color: "white",
            border: "1px solid white",
            borderRadius: "21px",
            padding: "3px 22px",
            height: "42px",
          }}
        >
          Get In Touch
        </Button>
        {/* Adding MediaQuery for responsiveness */}
        <div style={{ position: "relative" }}>
          <img
            src="/Article/pizza.png"
            alt="Main Image"
            style={{
              width: "100%", // make the image responsive to its container
              maxWidth: "100%", // ensure the image doesn't exceed its container width
              height: "auto", // maintain aspect ratio
            }}
          />
          <img
            src="/Article/design.png"
            alt="Pizza"
            style={{ position: "absolute", top: 0, left: 0, width: '100%', maxWidth: '100%' , height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
