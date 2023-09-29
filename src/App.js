import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayValue(inputValue);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <div className="container-fluid bg-dark text-white p-5">
      <div className="container-fluid p-5 border border-secondary">
        <div className="row">
          <div className="col">
            <div
              className="btn-group rounded-pill"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-light fw-bold">
                Open
              </button>
              <button type="button" className="btn btn-outline-light fw-bold">
                Close
              </button>
              <button type="button" className="btn btn-outline-light fw-bold">
                Boost
              </button>
            </div>
            <hr />
          </div>
        </div>
        <div className="row m-5">
          <div className="col card p-5 bg-dark text-white border border-secondary">
            <div className="card-body">
              <form className="row g-3 ">
                <div>
                  <label htmlFor="inputState" className="form-label fw-bold">
                    Select Asset
                  </label>
                  <select
                    id="inputState"
                    className="form-select bg-dark text-white"
                  >
                    <option selected>ETH</option>
                    <option>BTC</option>
                    <option>XRP</option>
                    <option>USDT</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="borrowAmount"
                    className="form-label fw-bold me-5"
                  >
                    Borrow Amount
                  </label>
                  <span className="badge bg-secondary ms-5 ">
                    Max Hold Amount : 200
                  </span>

                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="200"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-control bg-dark text-white"
                    id="borrowAmount"
                    placeholder="Enter Supply Amount"
                  />
                </div>
                <div className="row"></div>
                <button
                  type="submit"
                  className="btn btn-light fw-bold rounded-pill"
                >
                  Execute
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white border border-secondary">
              <div className="card-body">
                <h5 className="card-title">Borrow Amount : </h5>
                <h6 className="card-subtitle m-5">{displayValue}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
