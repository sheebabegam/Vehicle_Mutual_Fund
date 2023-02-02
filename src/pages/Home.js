import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Navbar from "../pages/Navbar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PieChartIcon from "@mui/icons-material/PieChart";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import PlanCreate from "./admin/PlanCreate";

function Home() {
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

          <MenuItem icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
          <MenuItem icon={<BorderColorIcon />}>Features</MenuItem>
          <MenuItem icon={<PieChartIcon />}>Forms & Charts</MenuItem>
          <MenuItem icon={<GridViewIcon />}>Tables</MenuItem>
          <MenuItem icon={<LayersIcon />}>Apps & Widgets</MenuItem>
          <MenuItem icon={<LockOutlinedIcon />}>Authentication</MenuItem>
          <MenuItem icon={<WarningAmberOutlinedIcon />}>Miscellaneous</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
        <Navbar />
        <PlanCreate />
      </main>
    </div>
  );
}

export default Home;
