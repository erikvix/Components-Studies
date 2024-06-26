import React, { Component } from "react";
import axios from "axios";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "https://official-joke-api.appspot.com/random_joke",
      setup: "",
      punchline: "",
      loading: false,
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  handleFetch() {
    this.setState({ loading: true });
    axios
      .get("https://official-joke-api.appspot.com/jokes/random", {
        method: "GET",
      })
      .then((res) => {
        this.setState({ loading: false });
        this.setState({
          setup: res.data.setup,
          punchline: res.data.punchline,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "#FF7D00" }}>Every Day Joke</h1>
        <div>
          <p style={{ fontSize: "1rem" }}>{this.state.setup}</p>
          <p style={{ fontSize: "1.2rem" }}>{this.state.punchline}</p>
          {this.state.loading ? (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.6s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  ></animateTransform>
                </path>
              </svg>
            </button>
          ) : (
            <button onClick={this.handleFetch}>Get your joke</button>
          )}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
