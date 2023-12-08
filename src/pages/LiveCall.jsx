import React, { useEffect, useState } from "react";
import "../../src/style.css";
import { useSelector } from "react-redux";

function LiveCall() {
    const state = useSelector((state) => state?.user?.user);
    const user = JSON.parse(localStorage.getItem("user"));
  const [number, setNumber] = useState(1);
  const randomNumber = (()=>{
    setTimeout(() => {
      let x = Math.floor(Math.random() * 100 + 1);
      setNumber(x);
    }, 7000);
  })
    useEffect(() => {
      randomNumber();
      }, [number ]);
  return (
    <div>
         <li>
                    <a href="/dashboard">
                      <i className="fa-solid fa-phone"></i>{" "}
                      <span className="notification_icon">
                        {user && user?.role === "User" ? <>{number}</> : <>0</>}
                      </span>
                    </a>
                    <sub style={{color:"white"}}>live</sub>
                    
                  </li>
    </div>
  )
}

export default LiveCall