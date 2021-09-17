import "./Form.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  const history = useHistory();
  let msg;

  const clickHandler = async () => {
    console.log("email:", email);
    console.log("password:", password);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password })
    };

    await fetch("https://dev-api.youthresourceapp.com/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        msg = data;
        if (msg.statusCode === 200) {
          /*as the api not working redirecting to home. */
          history.push("/home");
        } else {
          alert(msg.message);
        }
      });

    console.log(msg);
    history.push("/home");
  };

  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="right-content">
      <h2>Welcome Back!</h2>
      <h3>Sign In to Get Started</h3>
      <form onSubmit={formSubmit}>
        <input
          type="text"
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

      <a href="#" className="primary">
        Forgot password?
      </a>
    </div>
  );
};

export default Form;
