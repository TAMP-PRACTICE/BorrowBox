import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
const SideNav = () => {
    return (
        <div className='d-flex flex-column'>
            <Nav
            //   activeKey="/dashboard"
            //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link as={Link} to="/user-dashboard/dashboard" className="d-flex align-items-center py-2 px-3 " style={{ color: "#02abfe" }}><IoHomeOutline className="fs-6" />Dashboard</Nav.Link>
                </Nav.Item>
                 <Nav.Item>
                    <Nav.Link eventKey="link-3" as={Link} to="/user-dashboard/explore" className="d-flex align-items-center py-2 px-3 " style={{ color: "#02abfe" }} >
                       <IoBookOutline className="fs-6" /> Explore
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" as={Link} to="/user-dashboard/bookings" className="d-flex align-items-center py-2 px-3 " style={{ color: "#02abfe" }}><CiCalendar  className="fs-6"/>My Bookings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" as={Link} to="/user-dashboard/profile" className="d-flex align-items-center py-2 px-3 " style={{ color: "#02abfe" }} >
                        <FaRegUser className="fs-6"/>Profile
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SideNav