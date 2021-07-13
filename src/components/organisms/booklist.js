import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BookCard from '../molecules/bookcard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function BookList() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

    const bookList = [
        { 'category': '', 'id': 1, 'title': 'Reimagining Capitalism', 'author': 'Rebecca Henderson'},
        { 'category': '', 'id': 2, 'title': 'Deep Nutrition', 'author': 'Catherine Shanahan'},
        { 'category': '', 'id': 3, 'title': 'Resilient', 'author': 'Sevetri Wilson'},
    ]

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {bookList.map((book) => (
            <Grid key={book.id} item>
              <Paper className={classes.paper} />
              <BookCard book={book}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
