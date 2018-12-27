import React, { Component } from "react";
import { connect } from "react-redux";
import { getPageByHandle } from "../../actions/apiActions";

import { getPageSelector } from "../../selectors";

class PageDog extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getPageByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { page } = this.props;
    return (
      <div>
        <div> Страничка собаки</div>
        <img src={page} alt="" width="500px" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: getPageSelector(state)
});

export default connect(
  mapStateToProps,
  { getPageByHandle }
)(PageDog);
