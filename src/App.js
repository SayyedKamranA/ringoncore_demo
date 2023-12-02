import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./utills/Data";
import LineChart from "./components/LineChart";
import { useState } from "react";

Chart.register(CategoryScale);
function App() {
  const yValues = ['January','February','March','April','May','June','July','August','September','October','November','December' ];

  const [chartData, setChartData] = useState({
    type: "line",
    labels: yValues,
    datasets: [{ 
      data: [1000,2000,3000,3100],
       borderColor: "red",
       backgroundColor: "red",
       fill: false
 
     }, 
     { 
       data: [300, 400, 600, 332],
       borderColor: "green",
       backgroundColor: "green",
       fill: false
     },
     { 
         data: [1000,2000,2500,2768],
         borderColor: "blue",
         backgroundColor: "blue",
         fill: false
       },
       {
           data: [1500,2000,4000,400,],
           borderColor: "yellow",
           backgroundColor: "yellow",
           fill: false
         },
 ]
  });
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard chartData={chartData}/>} />
          <Route exact path="/chart" element={<LineChart chartData={chartData}/>}></Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
