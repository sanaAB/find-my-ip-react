import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./Card.css";
import { DateTime } from "luxon";


const useStyles = makeStyles({
  elevation:{
    zIndex:"modal",
    },
  root: {
    top: 120,
    left: 60,
    maxWidth: 250,
    position: 'absolute',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  },
  },
  media: {
    height: 140,
  },
});


export default function MediaCard( {ipAddress, isLoading, country,flag, city}) {
  const classes = useStyles();
  var now = DateTime.now();
  var localTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  console.log(now);

  return (
      isLoading ? (
        <div className= "content">
        <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
       </div>) : (
  <div className="" style={{display: "flex", justifyContent:"center"}}>
    <Card className={classes.root}  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title="Country flag"
          alt = "Country flag"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your IP address is: {ipAddress}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You are located in: {city}/{country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {localTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  ));
}















