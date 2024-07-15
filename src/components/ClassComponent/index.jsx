import React, { Component } from "react";
import "./index.css";
import { fetchJoke } from "../../services/api";
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: "",
      punchline: "",
      loading: false,
      error: null,
      history: [],
    };
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

  handleGetJoke = async () => {
    this.setState({ loading: true });
    try {
      const data = await fetchJoke();
      this.setState((prevState) => ({
        setup: data.setup,
        punchline: data.punchline,
        history: [...prevState.history, data],
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
      setTimeout(() => {
        this.setState({
          setup: "",
          punchline: "",
        });
      }, 4000);
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="titulo">Every Day Joke</h1>
        <div>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <p className="setup">{this.state.setup}</p>
          <p className="punchline">{this.state.punchline}</p>
          <button onClick={this.handleGetJoke} disabled={this.state.loading}>
            {this.state.loading ? (
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
            ) : (
              "Get your joke"
            )}
          </button>
        </div>
        {this.state.history.length > 0 && (
          <div className="history">
            <h3>Previous jokes</h3>
            <div>
              {this.state.history.map((joke, index) => (
                <div className="historyBox" key={index}>
                  <p className="setup">
                    Setup: <span>{joke.setup}</span>
                  </p>
                  <p className="punchline">
                    PunchLine: <span>{joke.punchline}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ClassComponent;
