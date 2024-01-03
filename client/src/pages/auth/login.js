import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // const register = () => {
    //   const user = { name, email, password };
    //   axios
    //     .post("/api/auth/register", user)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    // };
  
    return (
      <div className="d-flex justify-content-center" style={{ heighg: "80vh" }}>
        <div className="container align-items-center d-flex">
          <div className="row col-md-6 offset md-3 text-center">
            <h1 className="pt-5 fw-bold">Login</h1>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  