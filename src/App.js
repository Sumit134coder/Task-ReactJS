import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}
