import React, { SyntheticEvent } from "react";

interface CheckoutProps {}
interface CheckoutState {
  name: string;
}

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
  state = { name: "" };
  emailRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props); // base class constructor
    this.emailRef = React.createRef();
  }

  submitData(event: SyntheticEvent) {
    event.preventDefault(); // cancel the event behaviour
    console.log("submit called", this.state, this.emailRef.current?.value); // ? : null coalesce operator
  }
  render() {
    return (
      <form onSubmit={(event) => this.submitData(event)}>
        <label>Name</label>
        {/* CONTROLLED COMPONENT */}
        <input
          type="text"
          value={this.state.name}
          onChange={(event) =>
            this.setState({ name: event.currentTarget.value })
          }
        />
        <label>Email</label>
        {/* UNCONTROLLED COMPONENT */}
        <input type="text" ref={this.emailRef} />
        <button>Submit</button>
      </form>
    );
  }
}
export default Checkout;
