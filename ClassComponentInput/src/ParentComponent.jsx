import { Component } from "react";
import styleCart from "./parent.module.css";
import MyCart from "./components/Cart";
const forthDiv = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
  height: "40%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgb(79, 41, 105)",
  borderRadius: "10px",
};
const thirdDiv = {
  display: "flex",
  width: "70%",
  height: "80%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(62, 18, 85, 0.53)",
};
const inputDiv = {
  height: "5vh",
  border: "none",
  textAlign: "center",
  borderRadius: "5px",
};
class ParentComponent extends Component {
  render() {
    return (
      <div className={styleCart.mainDivCart}>
        <div style={thirdDiv}>
          <div style={forthDiv}>
            <h1 className={styleCart.h1Styel}>
              Please enter your password then press the Enter key
            </h1>
            <span className={styleCart.spanStyle}>
              Please enter only numbers
            </span>
            <MyCart styleing={inputDiv} vlidatingT="1234" vlidatingF="■■■■" />
          </div>
        </div>
      </div>
    );
  }
}
export default ParentComponent;
