import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    country: "armenia"
  }

  constructor(props) {
    super(props);
    console.log("constructor")
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  onClickHandler(e) {
    this.setState({country: "USA"})
  }
  render() {
    console.log("render");
    return (
      <div>
        hello world {this.state.country}
        <br/>
        <button onClick={this.onClickHandler}>
          poxel text@
        </button>
      </div>
    )
  }
}

export default App;
