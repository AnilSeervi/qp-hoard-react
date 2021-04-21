import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useEffect, useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useHistory, useLocation } from "react-router";
const useStyles = makeStyles({
  botnav: {
    position: "sticky",
    bottom: 0,
  },
});
const BottomNav = () => {
  const [value, setValue] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") setValue(null);
  }, [location.pathname]);
  return (
    <BottomNavigation
      value={value}
      className={classes.botnav}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="BBA"
        onClick={() => history.push("/bba")}
        icon={<TrendingUpIcon fontSize="small" />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        onClick={() => history.push("/bca")}
        label="BCA"
        icon={<CodeIcon fontSize="small" />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="BCOM"
        onClick={() => history.push("/bcom")}
        icon={<AccountBalanceIcon fontSize="small" />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default BottomNav;