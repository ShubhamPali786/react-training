import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartIcon(props: any) {
  const { count } = props;
  return (
    <Link to="/cart">
      <div id="ex3">
        <span className="p1 fa-stack has-badge" data-count={count}>
          <i className="p2 fa fa-circle fa-stack-2x text-primary"></i>
          <i
            className="p3 fa fa-shopping-cart fa-stack-1x fa-inverse"
            data-count={count}
          ></i>
        </span>
      </div>
    </Link>
  );
}
const mapStateToProps = (state: any) => {
  return { count: state.cart.length };
};
export default connect(mapStateToProps)(CartIcon);
