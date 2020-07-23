import React from "react";
import Product from "../components/Product";
import { ProductModel } from "../models/product.model";
import Axios from "axios";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import { connect } from "react-redux";
import { StoreModel } from "../store/reducers";
import { Dispatch } from "redux";
import { cartActions } from "../store/actions/cart.actions";

interface ProductListProps {
  selectedCode: string;
  addToCart: (p: ProductModel) => void;
}
interface ProductListState {
  pList: ProductModel[];
}
class ProductList extends React.Component<ProductListProps, ProductListState> {
  state: ProductListState = { pList: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    const url =
      "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
    Axios.get(url)
      .then((res) => {
        console.log("success", res);
        this.setState({ pList: res.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    return (
      <Container fullWidth>
        <Row>
          {/* <Product pData={pList} /> */}
          {/* <Product pData={pList} wishlist={true} /> */}
          {this.state.pList.map((value) => (
            <Column colSize={4}>
              <Product
                pData={value}
                code={this.props.selectedCode}
                key={value.productId}
                btnClick={() => this.props.addToCart(value)}
              />
            </Column>
          ))}
        </Row>
      </Container>
    );
  }
}
// connect(how to connect)(what to connect)
const mapStoreDataToProps = (storeData: StoreModel) => {
  return { selectedCode: storeData.currency };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addToCart: (product: ProductModel) =>
      dispatch(cartActions.addToCart(product)),
  };
};
export default connect(mapStoreDataToProps, mapDispatchToProps)(ProductList);
