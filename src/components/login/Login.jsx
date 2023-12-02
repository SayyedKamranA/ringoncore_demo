import React, { useEffect, useState } from "react";
import "../../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  // pramod.kumar@ringoncore.com
  // Support@321!
  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    axios
      .get(
        `https://ikalyuga.com/api/index.php?action=login&email=${email}&password=${password}`,
        {}
      )
      .then((res) => {
        const data = res?.data?.response;
       
      
        if(data.success === 1){
          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          navigate("/dashboard",{ state: { data: data } })
        }else{
          toast.error(data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
        }
      });
  };

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
