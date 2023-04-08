import React from "react";
import { Piechart, Recent, Sidebar } from "../../components";
import style from "./Dashboard.module.scss";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Overview from "../../components/Dashboard/Overview/Overview";
import Transactions from "../../components/Dashboard/Transactions/Transactions";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [theme, colorMode] = useMode();
  return (
    <div className={style.dashboardDiv}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
