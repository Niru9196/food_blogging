import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  console.log("props: ", props.title)
  return (
    <Card
      sx={{
        width: 381,
        height: 554,
        borderRadius: "21px",
      }}
    >
      <CardMedia
        sx={{ height: 258, width: 326, margin: "0 auto", marginTop: "27px", border: '0.88px solid #373737' }}
        image={props.image}
        title={props.title}
      />
      <CardContent
        style={{
          height: 125,
          width: 295,
          margin: "0 auto",
          marginTop: "35.51px",
          padding: "0px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            fontWeight: 700,
            fontSize: "21px",
            lineHeight: "27px",
            color: "#0E2368",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "27px",
            letter: "-2%",
            marginTop: "14px",
          }}
        >
          PLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard...
        </Typography>
        <Button
          size="small"
          sx={{ textTransform: "none" }}
          style={{
            height: 42,
            width: 131,
            border: "1px solid #424961",
            borderRadius: "21px",
            color: "#424961",
            fontWeight: 600,
            fontSize: "15.44px",
            letter: "-3%",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
