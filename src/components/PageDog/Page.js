import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>Порода собак не выбрана</h2>
        <Link to="/">Выбрать породу собак</Link>
      </div>
    );
  }
}
