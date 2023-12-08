import React, { useEffect, useState } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/actions/userAction";
import axios from "axios";
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
console.log('user', user)
const dispatch = useDispatch();
const navigate = useNavigate();

// Listen for changes in the user state
// useEffect(() => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user?.success === 1) {
//     navigate("/dashboard");
//   }
// }, [navigate,user]);

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(login(email, password));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
      .get(
        `https://ikalyuga.com/api/index.php?action=login&email=${email}&password=${password}`,
        config
      ).then((res)=>{
        const data = res?.data?.response;
        if (data?.success === 1) {
          navigate("/dashboard");
        }
      })
  // Clear the form fields
  setEmail("");
  setPassword("");
};

//   const state = useSelector((state) => state?.user?.user);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate()
//   // pramod.kumar@ringoncore.com
//   // Support@321!
//   useEffect(() => {}, []);
// const user = JSON.parse(localStorage.getItem("user"));

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(login(email, password, ));
//   if(user?.success === 1){
//  navigate("/dashboard")
//   setEmail("");
//   setPassword("");
//  }
                 
//   };

  return (
    <section className="login-sec">
      <div className="container">
        <div className="row d-flex justify-content-start align-items-cente vh-100 m-auto">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="login-box">
              <div className="login-logo">
                <img
                  src="../../img/white-logo.png"
                  className="img-fluid d-block mx-auto"
                  alt="login logo"
                />
              </div>

              <form className="login_form">
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      className="form-control login-inpt"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={password}
                      className="form-control login-inpt"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <div id="emailHelp" className="form-text login-inpt-txt">
                      <a href="#">forgot your password.</a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="info-btn login-submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
