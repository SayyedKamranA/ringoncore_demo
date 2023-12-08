import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Router from "./route";
import Dashboard from "../pages/Dashboard";
import Layout from "../pages/Layout";
import Blogs from "../pages/Blogs";
import NoPage from "../pages/NoPage";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function PrivateRoute() {
  const yValues = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [chartData, setChartData] = useState({
    type: "line",
    labels: yValues,
    datasets: [
      {
        data: [1000, 2000, 3000, 3100],
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
      },
      {
        data: [300, 400, 600, 332],
        borderColor: "green",
        backgroundColor: "green",
        fill: false,
      },
      {
        data: [1000, 2000, 2500, 2768],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
      },
      {
        data: [1500, 2000, 4000, 400],
        borderColor: "yellow",
        backgroundColor: "yellow",
        fill: false,
      },
    ],
  });
  return (
    <>
      <Switch>
        <Route path={Router.DASHBOARD} element={<Layout />}>
          <Route index element={<Dashboard chartData={chartData} />} />
          <Route path={Router.BLOG} element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Switch>
    </>
  );
}

export default PrivateRoute;
