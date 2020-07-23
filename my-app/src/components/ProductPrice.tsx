import React from "react";

interface ProductPriceProps {
  actualPrice: number;
  salePrice: number;
  code: string;
}
const ProductPrice: React.FC<ProductPriceProps> = ({
  actualPrice,
  salePrice,
  code,
}) => {
  if (actualPrice === salePrice) {
    return (
      <h5>
        {code} {actualPrice.toFixed(2)}
      </h5>
    );
  }
  return (
    <h5>
      {code} {salePrice.toFixed(2)}{" "}
      <small style={{ textDecoration: "line-through" }} className="text-muted">
        {code} {actualPrice.toFixed(2)}
      </small>
    </h5>
  );
};
export default ProductPrice;
