import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    init: "Hello World!",
  };
  render() {
    const { init } = this.state;
    return (
      <div>
        <p>{init}</p>
        <button
          onClick={() => {
            this.setState({ init: "Goodbye World!" });
          }}
        >
          안녕!!
        </button>
      </div>
    );
  }
}
