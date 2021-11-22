import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const {
    authInfo: { isAuthenticated, userName },
    toggleAuth,
  } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Typography variant="subtitle2">{userName}</Typography>
          <Button
            onClick={
              isAuthenticated ? toggleAuth.bind(this, "") : () => setOpen(true)
            }
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Toolbar>
        <Login open={open} handleClose={() => setOpen(false)} />
      </AppBar>
    </div>
  );
};

export default Header;
