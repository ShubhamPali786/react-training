import React from "react";
import { RouteChildrenProps } from "react-router-dom";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
interface DemoState {
  no: number;
  a: number;
}
interface DemoProps extends RouteChildrenProps {}
//  Fragments
class Demo extends React.Component<DemoProps, DemoState> {
  state: DemoState = { no: 1, a: 1 };

  shouldComponentUpdate(nextProps: any, nextState: DemoState) {
    console.log("component update called", nextProps, nextState);
    return nextState.a === 5 || nextState.no !== this.state.no;
  }

  userName = "Demo";
  render() {
    console.log("render called", this.state);
    let name = "Mike";
    return (
      <Container>
        <Row>
          <Column>
            <h1>Demo Component</h1>
            <p>this is component demo</p>
            <p>Hello from {name}</p>
            <p>{this.userName}</p>
            <p>{9 + 7}</p>
            <button
              onClick={() => this.props.history.push("/products")}
              className="btn btn-light mr-2"
            >
              Go To Products
            </button>
            <button
              onClick={() => this.setState({ no: 0 })}
              className="btn btn-light mr-2"
            >
              change to 0
            </button>
            <button
              onClick={() => this.setState({ no: 1 })}
              className="btn btn-light mr-2"
            >
              change to 1
            </button>
            <button
              className="btn btn-light mr-2"
              onClick={() =>
                this.setState((prevState: DemoState) => ({
                  a: prevState.a + 1,
                }))
              }
            >
              change a by 1
            </button>
          </Column>
        </Row>
      </Container>
    );
  }
}
export default Demo;
