import React from "react";
import { connect } from "react-redux";
import { StoreModel } from "../store/reducers";

const LoadingSpinner: React.FC<{ isLoading: boolean }> = (props) => {
  if (props.isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return null;
};
const mapStateToProps = (state: StoreModel) => {
  return { isLoading: state.loading };
};
export default connect(mapStateToProps)(LoadingSpinner);
