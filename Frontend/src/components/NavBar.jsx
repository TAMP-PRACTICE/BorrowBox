import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { Navbar ,Image,Container,Nav,Badge,Col,Button} from 'react-bootstrap'
const NavBar = () => {
    const [field,setField]=useState('login');
  return (
         <Navbar bg="#FFFFFF" data-bs-theme="light" className='d-flex align-items-center g-2'>
        <Container>
          <Navbar.Brand href="#home">
          <div className="position-relative px-5 ms-4">
                        <Link to="/">
                          <Image
                            src="/logo.png"
                            alt="BorrowBox"
                            width={165}
                            height={200}
                            className="mb-5"
                          />
                        </Link>
                        
                      </div>
          </Navbar.Brand>
          <Nav className="d-flex align-items-center g-6 px-2 ">
 <Col className='d-flex justify-content-center gap-3'>
                  
                       <Button className='rounded-4 p-2 px-4 ' style={
                        {
                          backgroundColor:(field==="login")?"#02abfe":"#FFFFFF",
                            color:
                                 (field === "login") ? "white" :"#02abfe" ,
                        }
                      } onClick={()=>{setField("login")}}>Login</Button>
                  
                   
                         <Button className='rounded-4 p-2 px-4' 
                         style={
                        {
                          backgroundColor:(field==="signup")?"#02abfe":"#FFFFF",
                            color:
                                 field === "signup" ? "white" : "#02abfe",
                        }}
                        onClick={()=>{setField('signup')}}>Signup</Button>
                  </Col> 
          </Nav>
        </Container>
      </Navbar>
    
  )
}

export default NavBar