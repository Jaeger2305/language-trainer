import React from "react";
import {Tabs, Tab} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavigationTabs = () => {
  const {pathname} = useLocation();

  return (
    <Tabs value={pathname} aria-label="basic tabs example">
      <Tab
        value="/add"
        label="Add"
        {...a11yProps(0)}
        to="/add"
        component={Link}
      />
      <Tab
        value="/train"
        label="Train"
        {...a11yProps(1)}
        to="/train"
        component={Link}
      />
    </Tabs>
  );
};

export {NavigationTabs};
