import React,{useState} from 'react';
import { LuUsers } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import {Row,Col,Image,Badge,Button} from "react-bootstrap";
const MainSection = () => {
    const[field,setField]=useState("explore");
  return (
    <Row >
        <Row>
            <Col>
        <Button bg="info" className="fw-6 p-6 m-6">Borrow•Explore•Learn</Button>
   
     
        </Col>
        <Col>
        <div style={{width:"500px",height:"500px"}}>
          <img src="/sideImage.png" alt="sideImage" style={{width:"500px",height:"500px"}}  className='me-0'/>
        </div>
        </Col>
        </Row>
        <Row>
              <Col className='d-flex  gap-3'>
                               
                                    <Button className='rounded-4 p-2 px-4 ' style={
                                     {
                                       backgroundColor:(field==="explore")?"#02abfe":"#FFFFFF",
                                         color:
                                              (field === "explore") ? "white" :"#02abfe" ,
                                     }
                                   } onClick={()=>{setField("explore")}}>Login</Button>
                               
                                
                                      <Button className='rounded-4 p-2 px-4' 
                                      style={
                                     {
                                       backgroundColor:(field==="learn")?"#02abfe":"#FFFFF",
                                         color:
                                              field === "learn" ? "white" : "#02abfe",
                                     }}
                                     onClick={()=>{setField('learn')}}>Signup</Button>
                 </Col>   
        </Row>
        <Row>
            <Col className=''>
            <div className='border-rounded d-flex align-items-center' style={{backgroundColor:"#daf3ff"}}>
                <div className='border-rounded d-flex align-items-center g-3'>
                  <div className='d-flex'>
                    <div><LuUsers bg="info" /></div>
                    <div style={{color:"#02abfe"}}><p>10K+</p>
                    <p className='text-muted'>Active Users</p>
                    </div>
                     </div>
                    <div className='d-flex'>
                    <div><FaCartShopping  bg="info" /></div>
                    <div style={{color:"#02abfe"}}><p>25K+</p>
                    <p className='text-muted'>Items Shared</p>
                    </div>
                </div>
                 <div className='d-flex'>
                    <div>< CiBoxList bg="info" /></div>
                    <div style={{color:"#02abfe"}}><p>50K+</p>
                    <p className='text-muted'>categories</p>
                    </div>
                </div>
              </div>
              
            </div>
            </Col>
        </Row>
    </Row>

  )
}

export default MainSection