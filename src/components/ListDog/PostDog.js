import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PostDog extends Component {
  render() {
    const { names } = this.props;
    let id = 0;
    let listArr = Object.keys(names);
    return listArr.map(p => {
      id++;
      if (names[p].length > 0) {
        return (
          <li key={id.toString()}>
            {p}
            <ul key={id.toString()}>
              {names[p].map(data => {
                id++;
                return (
                  <li key={id.toString()}>
                    <Link to={`/page/${p + "-" + data}`}>{data}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
      return (
        <li key={id.toString()}>
          <Link to={`/page/${p}`}>{p}</Link>
        </li>
      );
    });
  }
}

PostDog.propTypes = {
  names: PropTypes.object.isRequired
};

export default PostDog;
