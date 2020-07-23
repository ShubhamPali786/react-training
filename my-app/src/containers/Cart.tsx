import React from "react";
import CartItem from "../components/CartItem";
import { sumBy } from "lodash";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cartActions } from "../store/actions/cart.actions";
import Container from "../components/Container";

interface CartProps {
  cartItems: any[];
  currencyCode: string;
  removeItem: (id: number) => void;
}

class Cart extends React.Component<CartProps> {
  renderEmptyCart() {
    return (
      <div className="alert alert-info d-flex justify-content-between">
        Your shopping cart is empty
        <Link to="/products" className="btn btn-sm btn-outline-info">
          Continue Shopping
        </Link>
      </div>
    );
  }
  renderTable() {
    return (
      <table className="table table-light">
        {this.renderTableHeader()}
        {this.renderTableBody()}
        {this.renderTableFooter()}
      </table>
    );
  }
  renderTableBody() {
    return (
      <tbody>
        {this.props.cartItems.map((item) => (
          <CartItem
            item={item}
            key={item.productId}
            code={this.props.currencyCode}
            remove={() => this.props.removeItem(item.productId)}
          />
        ))}
      </tbody>
    );
  }
  renderTableHeader() {
    const columns = ["", "Name", "Price", "Qty", "Total", ""];
    return (
      <thead>
        <tr className="thead-light">
          {columns.map((v, i) => (
            <th key={i}>{v}</th>
          ))}
        </tr>
      </thead>
    );
  }
  renderTableFooter() {
    const { currencyCode, cartItems } = this.props;
    return (
      <tfoot>
        <tr className="thead-light">
          <td>
            <Link to="/products" className="btn btn-sm btn-info">
              <i className="fas fa-chevron-left"></i> Continue Shopping
            </Link>
          </td>
          <td>
            <strong>Total</strong>
          </td>
          <td colSpan={3}>
            <strong>
              {currencyCode}{" "}
              {sumBy(
                cartItems,
                (v: any) => v.productQty * v.productPrice
              ).toFixed(2)}
            </strong>
          </td>
          <td colSpan={1}>
            <Link
              className="btn btn-sm btn-warning text-white"
              to="/checkout/1"
            >
              Checkout <i className="fas fa-chevron-right"></i>
            </Link>
          </td>
        </tr>
      </tfoot>
    );
  }
  render() {
    const { cartItems } = this.props;
    return (
      <Container>
        {cartItems && cartItems.length > 0
          ? this.renderTable()
          : this.renderEmptyCart()}
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeItem: (id: number) => dispatch(cartActions.removeItem(id)),
  };
};
const mapStateToProps = (state: any) => {
  return {
    currencyCode: state.currency,
    cartItems: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
