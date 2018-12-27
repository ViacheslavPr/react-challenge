import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDog } from "../../actions/apiActions";
import PostDog from "./PostDog";

import {
  getInfoLoadingSelector,
  getInfoErrorSelector,
  getInfoNamesSelector
} from "../../selectors/index";

class ListDog extends Component {
  componentDidMount() {
    this.props.getDog();
  }

  render() {
    const { names, loading, error } = this.props;
    let list;
    if (Object.keys(names).length) {
      list = <PostDog names={names} />;
    } else {
      list = <div>No list</div>;
    }
    return (
      <div>
        <div>Список собак</div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error, try again</p>
        ) : (
          <ul>{list}</ul>
        )}
      </div>
    );
  }
}

ListDog.propTypes = {
  getDog: PropTypes.func.isRequired,
  names: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: getInfoLoadingSelector(state),
  error: getInfoErrorSelector(state),
  names: getInfoNamesSelector(state)
});

export default connect(
  mapStateToProps,
  { getDog }
)(ListDog);
