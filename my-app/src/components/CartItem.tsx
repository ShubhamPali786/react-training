//CartItem.js
import React from "react";
import ImageWithFallback from "./ImageWithFallback";

function CartItem(props: any) {
  const { item, code, remove } = props;
  let [qty, updateQty] = React.useState(item.productQty);
  return (
    <tr>
      <td>
        <ImageWithFallback source={item.productImage} />
      </td>
      <td>{item.productName}</td>
      <td>
        {code} {Number(item.productPrice).toFixed(2)}
      </td>
      <td>
        <input
          type="number"
          value={qty}
          min="1"
          className="form-control col-md-3"
          onChange={(e) => {
            const q = e.currentTarget.valueAsNumber;
            updateQty(q);
            item.productQty = q;
          }}
        />
      </td>
      <td>
        {code} {(qty * item.productPrice).toFixed(2)}
      </td>
      <td>
        <button
          onClick={() => remove()}
          className="btn btn-sm btn-danger rounded-circle"
          title="Delete"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
}
export default CartItem;
