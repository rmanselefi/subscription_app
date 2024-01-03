import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = { name, email, password };
      const res = await axios.post("/api/auth/register", user);
      console.log(res.data);
      toast.success("Registered Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ heighg: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset md-3 text-center">
          <h1 className="pt-5 fw-bold">Lets Get Started</h1>
          <p className="lead pb-4">Sign up for free. No credit card required</p>

          <div className="form-group">
            <Input label="Name" value={name} setValue={setName} />
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              type="email"
            />
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
            />
            <div className="d-grid">
              <Button
                label="Register"
                onClick={register}
                type="danger"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
