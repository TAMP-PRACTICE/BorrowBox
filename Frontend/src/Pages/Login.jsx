import React,{useState} from 'react'
import {Container,Row,Col,Form,FloatingLabel,Image,InputGroup,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Login = () => {
 const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit=(e) => {
    e.preventDefault();
  }
  return (
      <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container fluid className="px-0">
        <Row className="g-0 min-vh-100">
          <Col
            lg={7}
            className="d-none d-lg-flex position-relative align-items-center"
            style={{
     backgroundImage: "url('/loginImage.jpeg')",
     backgroundSize: "cover",
     minHeight: '100vh',
     width:"550px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
            }}
          >
            <div className="position-absolute top-0 w-100 h-100">
            </div>
            <div className="position-relative px-5 ms-4">
              <Link to="/">
                <Image
                  src="/logo.png"
                  alt="BorrowBox"
                  width={165}
                  className="mb-5"
                />
              </Link>
              <h1>Join Our Community </h1>
            </div>
          </Col>
                       <Col className='m-2'>
                       <h1 style={{color:"#02abfe"}}>Welcome Back </h1>
                       <h3 className='text-secondary'>Log in to your Account</h3>
                      <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold small" style={{color:"#02abfe"}}>Email Address</Form.Label>
                  <InputGroup className="rounded-3 border overflow-hidden">
                    <InputGroup.Text className="bg-white border-0 text-muted pe-1">
                      <i className="bi bi-person"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="border-0 shadow-none ps-2 py-2 text-muted"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold small" style={{color:"#02abfe"}}>Password</Form.Label>
                  <InputGroup className="rounded-3 border overflow-hidden">
                    <InputGroup.Text className="bg-white border-0 text-muted pe-1">
                      <i className="bi bi-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Your password"
                      className="border-0 shadow-none ps-2 py-2 text-muted"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <InputGroup.Text 
                      className="bg-white border-0 text-muted cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                     <div className="d-flex justify-content-between align-items-center mb-4">
                
                  <Link to="/forgot-password" className="text-decoration-none small"style={{color:"#02abfe"}} >
                    Forget Password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="w-100 py-2 rounded-3 fw-semibold border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#02abfe' }}
                >
                  Login <i className="bi bi-arrow-right"></i>
                </Button>

              </Form>
                  <div className="text-center mt-4 me-0">
                <small className="text-muted">
                  Don't have account ? <Link to={'/register'} className=" text-decoration-none" style={{color:"#02abfe"}}>Sign in</Link>
                </small>
              </div>
                  </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login