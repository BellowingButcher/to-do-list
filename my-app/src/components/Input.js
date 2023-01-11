import React from "react";
import Button from "react-bootstrap";
function Input() {
  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          className="form-control border border-5 rounded-pill mt-3 mx-1 text-center"
          placeholder="What do you want to do today?"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="row mt-1 mx-5 text-center"><button type="button" className="btn btn-sm border border-5 rounded-pill text-center">I can do this!...button</button></div>
    </div>
  );
}

export default Input;
