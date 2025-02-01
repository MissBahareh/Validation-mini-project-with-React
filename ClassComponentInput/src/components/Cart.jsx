import { Component } from "react";
class MyCart extends Component {
  render() {
    const { styleing } = this.props;
    return (
      <>
        <input
          style={styleing}
          type="text"
          placeholder="Write Password Hear"
          onKeyUp={(e) => {
            e.keyCode === 13
              ? e.target.value === "1234"
                ? (e.target.value = this.props.vlidatingT)
                : (e.target.value = this.props.vlidatingF)
              : "";
          }}
        />
      </>
    );
  }
}
export default MyCart;
