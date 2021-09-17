import Form from "./subComponents/Form";
import "../components/Login.css";
import Visit from "./subComponents/Visit";

const Login = () => {
  return (
    <div className="container">
      <Visit />
      <Form />
    </div>
  );
};

export default Login;
