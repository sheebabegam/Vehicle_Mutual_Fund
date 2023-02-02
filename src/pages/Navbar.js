import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flex_nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: 20,
    // "&:hover": {
    //   color: "yellow",
    //   borderBottom: "1px solid white",
    // },
  },
}));

function Navbar() {
  const classes = useStyles();
  const { collapseSidebar } = useProSidebar();
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgb(249, 249, 249, 0.7)",
        color: "black",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <CssBaseline />
      <Toolbar className={classes.flex_nav}>
        {/* <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography> */}
        <div>
          <MenuOutlinedIcon
            onClick={() => {
              collapseSidebar();
            }}
          />
        </div>
        <div className={classes.navlinks} style={{ color: "black", gap: 20 }}>
          <DarkModeIcon />

          <img
            src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/usa.svg"
            alt=""
            style={{ height: 20, width: 20 }}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-maximize"
            // style={{ marginTop: 3 }}
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
          <img
            src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/avatar/avatar-13.png"
            alt=""
            style={{ height: 30, width: 30 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
