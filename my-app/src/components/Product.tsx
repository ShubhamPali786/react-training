import React from "react";
import { ProductModel } from "../models/product.model";
import ImageWithFallback from "./ImageWithFallback";
import ProductPrice from "./ProductPrice";

interface ProductProps {
  pData: ProductModel;
  wishlist?: boolean;
  code: string;
  btnClick: () => void;
}

class Product extends React.Component<ProductProps> {
  static defaultProps = {
    wishlist: false,
  };
  renderButton(stock: boolean, wishlist: boolean | undefined) {
    if (stock) {
      return (
        <button
          className="btn btn-primary btn-block btn-sm"
          onClick={() => this.props.btnClick()}
        >
          <i className="fab fa-opencart"></i> Add to{" "}
          {wishlist ? "Wishlist" : "Cart"}
        </button>
      );
    }
    return (
      <button className="btn btn-danger btn-block btn-sm" disabled>
        <i className="fas fa-ban"></i> Out of Stock
      </button>
    );
  }
  render() {
    const { pData, wishlist, code } = this.props;
    return (
      <div className="shadow p-4 rounded my-3 text-center">
        <ImageWithFallback source={pData.productImage} />
        <h4 className="mt-2">{pData.productName}</h4>
        {/* <h5>
          {code} {pData.productPrice.toFixed(2)}
        </h5> */}
        <ProductPrice
          code={code}
          salePrice={pData.salePrice}
          actualPrice={pData.productPrice}
        />
        {/* <button>Add To {wishlist ? "Wishlist" : "Cart"}</button> */}
        {this.renderButton(pData.productStock, wishlist)}
      </div>
    );
  }
}
export default Product;
