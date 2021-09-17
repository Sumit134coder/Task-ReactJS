import "./Form.css";
import { useState } from "react";

const Form = () => {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  const clickHandler = () => {
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <div className="right-content">
      <h2>Welcome Back!</h2>
      <h3>Sign In to Get Started</h3>
      <form>
        <input
          type="email"
          placeholder="Username"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit" onClick={clickHandler}>
          Sign in
        </button>
      </form>

      <a href="#">Forgot password</a>
    </div>
  );
};

export default Form;
