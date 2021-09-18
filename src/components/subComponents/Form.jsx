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

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ "email_phone": email, "password": password , "deviceType": 0,
    //   "devicToken": "238482"})
    // };

    //
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email_phone: email,
      password: password,
      deviceType: 0,
      devicToken: "238482"
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://dev-api.youthresourceapp.com/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.statusCode);

        if (result.statusCode === 200) {
          history.push("/home");
        } else {
          alert("wrong email or password");
        }
      })
      .catch((error) => console.log("error", error));

    console.log(msg);
    // history.push("/home");
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
