
import React from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './components/Footer';

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
    this.setState({ country: "USA" })
  }
  render() {

    return (
      <>
        <Header />
        <SideBar />
        <Content />
        <Footer />
      </>

    );
  }
}

export default App;
