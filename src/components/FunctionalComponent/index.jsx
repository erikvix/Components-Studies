import React, { useState } from "react";
import "./index.css";
import { fetchJoke } from "../../services/api";

export default function FunctionalComponent() {
  const [punchline, setPunchline] = useState();
  const [setup, setSetup] = useState();
  const [loading, setLoading] = useState(false);

  const handleGetJoke = async () => {
    setLoading(true);
    try {
      const data = await fetchJoke();
      console.log(data);
      setPunchline(data.punchline);
      setSetup(data.setup);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSetup("");
        setPunchline("");
      }, 4000);
    }
  };

  return (
    <div>
      <h2 className="titulo2">Functional Component</h2>
      {punchline && setup && (
        <div>
          <p className="setup">{setup}</p>
          <p className="punchline">{punchline}</p>
        </div>
      )}
      {loading ? (
        <button className="button">
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
        <button className="button" onClick={handleGetJoke}>
          Get your Joke
        </button>
      )}
    </div>
  );
}
