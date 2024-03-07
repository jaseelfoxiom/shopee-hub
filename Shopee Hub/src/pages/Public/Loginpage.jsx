import React, { useState } from "react";
import { ApiCall } from "../../services/ApiCall";
import { useAuth } from "../../services/Context";
import { Show_Toast } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";
// import { DashBord } from "../utils/Path_Url";
import { jwtDecode } from "jwt-decode";
import { Form } from "react-bootstrap";

function Loginpage() {
  const navigate = useNavigate();
  const { login, token, check_Validation } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function decodeTokenAndCheckRole(token) {
    // Check if the token is present and a string before decoding
    const decoded =
      token && typeof token === "string" ? jwtDecode(token) : null;

    return decoded;
  }
  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await ApiCall("post", "/user/login/", formData);
      console.log(response, "rrrrrrrrrrrrrrrrrrrrrrrr");
      if (response.status === 200) {
        // Successful login

        setValidated(false);
        // Store the token using the login function from the context

        login(response.data.data);
        Show_Toast(response.message, true);

        // Decode the token and check the role
        const decodedToken = decodeTokenAndCheckRole(response?.data?.data);

        if (decodedToken?.role === "admin") {
          // Navigate only when the status code is 200
        //   navigate(DashBord);
        } else {
          // Handle non-admin user
          Show_Toast("Invalid user");
        }
      } else {
        // Handle authentication error or other non-200 status codes
        if (response.status === 500) {
          // Unauthorized (invalid username or password)
          Show_Toast("Login Failed", false);
        } else {
          console.error("Login Failed:", response.message);
        }
      }
    } catch (error) {
      console.error("API Error:", error);
      // Handle API error, e.g., show error message
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="login-card login-dark">
              <div>
                {/* <div><a className="logo" href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/logo-1.png" alt="looginpage" /><img className="img-fluid for-dark" src="../assets/images/logo/logo.png" alt="looginpage" /></a></div> */}
                <div className="login-main">
                  {/* <form className="theme-form"> */}
                  <Form
                    noValidate
                    validated={validated}
                    // onSubmit={handleSubmit}
                    onSubmit={(e) =>
                      check_Validation(e, handleSubmit, setValidated)
                    }
                  >
                    <h3>Sign in to account</h3>
                    <p>Enter your email &amp; password to login</p>
                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        required
                        type="text"
                        className={`form-control p_input ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        placeholder="Enter username "
                        name="username"
                        value={formData.username}
                        // onChange={handleInputChange}
                        onChange={(e) => {
                          const trimmedValue = e.target.value.replace(
                            /^\s+/g,
                            ""
                          );
                          setFormData({
                            ...formData,
                            username: trimmedValue,
                          });
                        }}
                      />
                      <div className="invalid-feedback">{errors.username}</div>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <div className="form-input position-relative">
                        <input
                          required
                          type="text"
                          className={`form-control p_input ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Enter password"
                          name="password"
                          value={formData.password}
                          // onChange={handleInputChange}
                          onChange={(e) => {
                            const trimmedValue = e.target.value.replace(
                              /^\s+/g,
                              ""
                            );
                            setFormData({
                              ...formData,
                              password: trimmedValue,
                            });
                          }}
                        />

                        {/* <div className="show-hide">
                          <span className="show"> </span>
                        </div> */}
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      {/* <div className="checkbox p-0">
                  <input id="checkbox1" type="checkbox" />
                  <label className="text-muted" htmlFor="checkbox1">Remember password</label>
                </div><a className="link" href="forget-password.html">Forgot password?</a> */}
                      <div className="text-end mt-3">
                        <button
                          className="btn btn-primary btn-block w-100"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                    {/* <h6 className="text-muted mt-4 or">Or Sign in with</h6>
              <div className="social mt-4">
                <div className="btn-showcase"><a className="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i className="txt-linkedin" data-feather="linkedin" /> LinkedIn </a><a className="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i className="txt-twitter" data-feather="twitter" />twitter</a><a className="btn btn-light" href="https://www.facebook.com/" target="_blank"><i className="txt-fb" data-feather="facebook" />facebook</a></div>
              </div> */}
                    <p className="mt-4 mb-0 text-center">
                      Don't have account?
                      <a className="ms-2" href="sign-up.html">
                        Create Account
                      </a>
                    </p>
                  </Form>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
