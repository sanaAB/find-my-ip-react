import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DateTime } from "luxon";


const useStyles = makeStyles({
  elevation:{
    zIndex:20,
    },
  root: {
    maxWidth: 345,

  },
  media: {
    height: 140,
  },
});

export default function MediaCard( {ipAddress, isLoading, country,city}) {
  const classes = useStyles();
  var now = DateTime.now();
  console.log(now._zone.name);

  return (
      isLoading ? (
        <div className= "content">
        <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
       </div>) : (
    <Card className={classes.root}  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={city}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your IP address is: {ipAddress}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You are located in: {country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Zone: {now._zone.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Local time: {now.c.hour}:{now.c.minute}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Date: {now.c.day}/{now.c.month}/{now.c.year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ));
}


















// import React from "react";

// export default function Card({ipAddress, isLoading}){
//     return (
//         isLoading ? (
//             <div className= "content">
//              <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
//             </div>) : (
//     <h1>{ipAddress}</h1>)
//     )
// }