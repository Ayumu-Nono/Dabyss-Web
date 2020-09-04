import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 60,
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <a href="#">
              <img src="./logo_Dabyss.png" className={classes.logo} />
            </a>
            <Typography variant="h6" className={classes.title}>
              <a href="#">MinigameDabyss</a>
            </Typography>
            <Button color="inherit">ゲーム一覧</Button>
            <Button color="inherit">ブログ</Button>
            <Button color="inherit">お問い合わせ</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
