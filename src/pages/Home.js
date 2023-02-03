import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Navbar from "../pages/Navbar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PieChartIcon from "@mui/icons-material/PieChart";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import PlanCreate from "./admin/PlanCreate";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SidebarTitles from "../assests/JSON/SidebarTitles";
import VehicleCreate from "./admin/VehicleCreate";

function Home() {
  const navigate = useNavigate();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("auth"));
  console.log("Role is", user.role);

  const [userPlan, setUserPlan] = useState("");
  console.log("USER Plan", userPlan);

  const [click, setClick] = useState(false);

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={
              <img
                src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/logo-letter.png"
                alt="img"
                style={{ height: "40px", width: "40px" }}
              />
            }
            style={{ textAlign: "center" }}
          >
            {" "}
            <img
              src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/logo-dark-text.png"
              alt=""
            />
          </MenuItem>

          {SidebarTitles.map((item, i) => (
            <Accordion className={classes.accord_main}>
              <MenuItem icon={item.icon}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ height: 40 }}
                >
                  {item.heading}
                </AccordionSummary>
              </MenuItem>
              {item.sub_menu.map((data, j) => (
                <AccordionDetails style={{ paddingTop: 0, paddingBottom: 0 }}>
                  <Accordion
                    className={classes.accord_main}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ paddingLeft: 67 }}
                      className={classes.accord_details}
                    >
                      {data.sub_name}
                    </AccordionSummary>
                    {data.items.map((item, k) => (
                      <AccordionDetails
                        style={{ paddingLeft: 70, cursor: "pointer" }}
                        onClick={() => {
                          setUserPlan(item.item_name);
                          setClick(true);
                        }}
                      >
                        {item.item_name}
                      </AccordionDetails>
                    ))}
                  </Accordion>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}

          <MenuItem
            icon={<LogoutIcon />}
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            &nbsp; Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
        <Navbar />
        {userPlan === "Create User Plan" ? (
          user.role === "admin" ? (
            userPlan === "Create User Plan" && <PlanCreate />
          ) : (
            <div className={classes.flex_div_admin_login}>
              <div>
                <h1 className={classes.admin_error_text}>
                  Please Login as Admin
                </h1>
                <img
                  src="https://www.fixrunner.com/wp-content/uploads/2017/05/Cannot-Login-to-WordPress-Admin-Areatw.png"
                  alt=""
                />
              </div>
            </div>
          )
        ) : (
          ""
        )}
        {userPlan === "Create Vehicle Plan" ? (
          user.role === "admin" ? (
            userPlan === "Create Vehicle Plan" && <VehicleCreate />
          ) : (
            <div className={classes.flex_div_admin_login}>
              <div>
                <h1 className={classes.admin_error_text}>
                  Please Login as Admin
                </h1>
                <img
                  src="https://www.fixrunner.com/wp-content/uploads/2017/05/Cannot-Login-to-WordPress-Admin-Areatw.png"
                  alt=""
                />
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Home;

const useStyles = makeStyles({
  accord_main: {
    boxShadow: "none !important",
    backgroundColor: "transparent !important",
  },
  accord_details: {
    paddingLeft: 65,
    paddingBottom: 20,
  },
  accord_details_last: {
    paddingLeft: 65,
    paddingBottom: 0,
  },
  hover_div: {
    backgroundColor: "pink",
    height: 200,
    width: 200,
  },
  flex_div_admin_login: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50% !important",
  },
  admin_error_text: {
    color: "red",
    textAlign: "center",
  },
});

// ------------------------------------------------------------------------------------

// const [isHovering, setIsHovering] = useState(false);
// const [hover, setHover] = useState();

// const handleMouseOver = (e) => {
//   setHover(e);
//   setIsHovering(true);
// };

// const handleMouseOut = () => {
//   setIsHovering(false);
// };
// console.log(hover);

// const onMouseMove = () => {
//   setIsHovering(true);
// };

// <div
//   className={classes.hover_div}
//   style={isHovering ? { display: "block" } : { display: "none" }}
//   // style={true ? { display: "block" } : { display: "none" }}
//   onMouseOver={onMouseMove}
//   onMouseOut={handleMouseOut}
// >
//   {SidebarTitles.map((title, i) =>
//     title.sub_menu.map(
//       (sub, j) =>
//         hover === sub.id &&
//         sub.items.map((list, j) => (
//           <p style={{ color: "white" }}>{list.item_name}</p>
//         ))
//     )
//   )}
// </div>;
