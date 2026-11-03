import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import NavBar from '../components/NavBar';
import MainSection from '../components/MainSection.jsx';
const LandingPage = () => {
  return (
   <div>
    <Container>
        <Row>
            <Col lg={12}>
                <NavBar></NavBar>
            </Col>
        </Row>
        <MainSection></MainSection>
    </Container>
   </div>
  )
}

export default LandingPage