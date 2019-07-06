
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  state = {
    isVisible: false
  };

  constructor(props) {
    super(props);
    console.log("constructor")
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }


  handleOnToggle() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }
  // onClickHandler(e) {
  //   this.setState({ country: "USA" })
  // }
  render() {

    return (
      <Container fluid>
        <Header onToggleHandler={this.handleOnToggle} />
        <Row>
          {
            this.state.isVisible && (
              <Col md="3">
                <SideBar />
              </Col>
            )
          }
          <Col md={this.state.isVisible ? 9 : 12}>
            <Content />
          </Col>
        </Row>
        <Footer />
      </Container>

    );
  }
}

export default App;
