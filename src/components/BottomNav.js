import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#191d24",
    zIndex: 100,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);    //need to understand
  const history = useHistory();       //from react router

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/Movies");
    } else if (value === 2) {
      history.push("/Series");
    } else if (value === 3) {
      history.push("/Search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {        //how this event is being called and values are getting changed as event is not used anywhere and also values are not assigned how it gets changed
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
      <BottomNavigationAction
        style={{ color: "#9d59f5" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#9d59f5" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#9d59f5" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#9d59f5" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}