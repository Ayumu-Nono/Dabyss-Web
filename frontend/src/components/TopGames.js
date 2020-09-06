import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(6),
  },
  card: {
    maxWidth: 345,
    margin: "auto",
  },
  button: {
    padding: theme.spacing(6),
  },
}));

const TopGames = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">ゲーム一覧</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="hoge"
                  height="200"
                  image="./logo_Dabyss.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ワードウルフ
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="hoge"
                  height="200"
                  image="./logo_Dabyss.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ワードウルフ
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="hoge"
                  height="200"
                  image="./logo_Dabyss.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ワードウルフ
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.button}>
          <Button variant="outlined" color="secondary">
            more
          </Button>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default TopGames;
