import React from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Header from '../components/Header';
import About from '../pages/About';
import Content from '../components/Content';
import Home from '../pages/Home';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';


function Web(props) {
    return (
        <Container fluid>
            <Header onToggleHandler={props.handleOnToggle} />
            <Row>
                {
                    props.isVisible && (
                        <Col md="3">
                            <SideBar />
                        </Col>
                    )
                }
                <Col md={props.isVisible ? 9 : 12}>
                    <Switch>
                        <Content>
                            <Route exact component={Home} path="/" />
                            <Route component={About} path="/contact" />
                            <Redirect from="*" to="/" />
                        </Content>
                    </Switch>
                    <Footer />

                </Col>
            </Row>
        </Container>


    )
}
export default Web;