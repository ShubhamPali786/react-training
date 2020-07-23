import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { currencyActions } from "../store/actions/currency.actions";

interface CurrencyProps {
  currencyChange: (code: string) => void;
}

class Currency extends React.Component<CurrencyProps> {
  render() {
    const codes = ["INR", "USD", "EUR", "GBP", "CAD"];
    return (
      <select
        className="form-control"
        onChange={(event) =>
          this.props.currencyChange(event.currentTarget.value)
        }
      >
        {codes.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    currencyChange: (code: string) =>
      dispatch(currencyActions.changeCurrency(code)),
  };
};
// connect(what to fetch, what to modify)(component)
export default connect(null, mapDispatchToProps)(Currency);
