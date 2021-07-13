import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button from '../atoms/Button';

const useStyles = makeStyles({
  root: {
    width: 250,
    //minWidth: 250,
  },
  media: {
    height: 120,
  },
  content: {
    height: 125,
  }
});



export default function BookCard({book}) {
  const classes = useStyles();

  function addToLibrary(bookName) {

  }

  return (
      
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://images.blinkist.io/images/books/5f76e2276cee070007d0480d/1_1/640.jpg"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {book.author}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={addToLibrary.bind(this, 'bookName')}>Add to Library</Button>
        </CardActions>
    </Card>
  );
}
