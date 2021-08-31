import "./scss/app.scss";
import Header from "./components/Header";

const app = () => {
  document.getElementById("header").innerHTML = Header();
};

// init app
app();
