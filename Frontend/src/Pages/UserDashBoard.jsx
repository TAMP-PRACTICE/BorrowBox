import React from 'react'
import { Outlet } from 'react-router-dom';
import SideNav from '../components/Sidenav';
import {Container,Row,Col} from "react-bootstrap";
const UserDashBoard = () => {
  return (
   <Container fluid>
                <Row>
                    <Col md={2} className='' style={{ backgroundColor: "#FFFFFF", height: "100dvh",top:"0",position:"sticky" }}>
                        <div>
                            <img src="/logo.png" style={{ maxWidth: '100px' }} alt="" />
                        </div>
                        <Col>
                           <SideNav/>

                        </Col>

                    </Col>
                    <Outlet></Outlet>
                 
                </Row>

            </Container>
  )
}

export default UserDashBoard