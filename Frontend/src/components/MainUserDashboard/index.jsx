import React from 'react'
import {Col,Form,Row} from "react-bootstrap";
import { FaBookBookmark } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import { FaLaptop } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
const MainUserDashboard = () => {
  return (
    <Col style={{backgroundColor:"#f7f9fd"}}>
        <Row>
            <Col className='m-3'> 
               <Form.Control
              type="text"
                    Search bar
              className=" mr-sm-2"
            />
            </Col>
        </Row>
        <Row>
            <Col>
            <h3 style={
                {
                    color:"#2b3a67"
                }
            }>Hello Mr. Piyush</h3>
            <p className='text-secondary'>Find or lent equipment in your Community</p>
            </Col>
        </Row>
        <Row>
            <Col>
            
             <div className='d-flex-column align-items-start p-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <FaBookBookmark className="me-3 fs-5" style={{ color: "#02abfe" }} />
             <h3 style={{ color: "#02abfe" }} >3</h3>
             <p style={{ color: "#02abfe" }}>Active Bookings</p>
                </div>
            </Col>
            <Col>
            
             <div className='d-flex-column align-items-start p-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <IoDownloadOutline className="me-3 fs-5" style={{ color: "#02abfe" }} />
             <h3 style={{ color: "#02abfe" }} >12</h3>
             <p style={{ color: "#02abfe" }}>Items Borrowed</p>
                </div>
            </Col>
            <Col>
            
             <div className='d-flex-column align-items-start p-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <GoUpload  className="me-3 fs-5" style={{ color: "#02abfe" }} />
             <h3 style={{ color: "#02abfe" }} >8</h3>
             <p style={{ color: "#02abfe" }}>Items Lend</p>
                </div>
            </Col>
        </Row>
        <Row className='g-3 mt-3'>
            <Col lg={12} className='m-3 border-rounded'>
            <img src="/dashboardImage.png"  style={{width:"900px",height:"200px"}} alt="img" />
            </Col>
        </Row>
        <Row className='g-3'>
            <h4 className='text-dark'>Popular Categories</h4>
            <Col className='d-flex align-items-center justify-center d-column m-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
            <div className='m-3' style={{margin:"auto"}}>
                  <div style={{width:"70px",height:"70px" ,backgroundColor:"#daf3ff",borderRadius:"50%"}}>
                   <FaLaptop  className="fs-5 m-3" style={{ color: "#02abfe" }}/>
            </div>
         
            <h4>Electronics</h4>
            </div>
          
            </Col>
             <Col className='d-flex align-items-center justify-center d-column m-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <div className='m-3' style={{margin:"auto"}}>
                  <div style={{width:"70px",height:"70px" ,backgroundColor:"#daf3ff",borderRadius:"50%"}}>
                   <IoMdFootball  className="fs-5 m-3" style={{ color: "#02abfe" }}/>
            </div>
         
            <h4>Sports</h4>
             </div>
          
            </Col>
             <Col className='d-flex align-items-center justify-center d-column m-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <div className='m-3' style={{margin:"auto"}}>
                <div style={{width:"70px",height:"70px" ,backgroundColor:"#daf3ff",borderRadius:"50%"}}>
                   <FaTools  className="fs-5 m-3" style={{ color: "#02abfe" }}/>
            </div>
         
            <h4>Tools</h4>
             </div>
            
            </Col>
            <Col className='d-flex align-items-center justify-center d-column m-2' style={{backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
             <div className='m-3' style={{margin:"auto"}}>
                <div style={{width:"70px",height:"70px" ,backgroundColor:"#daf3ff",borderRadius:"50%"}}>
                   <GiCampingTent  className="fs-5 m-3" style={{ color: "#02abfe" }}/>
            </div>
         
            <h4>Camping</h4>
             </div>
            
            </Col>
        </Row>
       
    </Col>
  )
}

export default MainUserDashboard