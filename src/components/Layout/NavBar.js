import { useMutation } from '@apollo/react-hooks';
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getUserLogOut } from '../../redux/actions/LognAction';
import { LOGOUTCUSTOMER } from '../../utils/QueryAndMutations';
const NavBar = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.LoginReducer);
    const token = window.localStorage.getItem('security_token');
    const userDetails = JSON.parse(window.localStorage.getItem('user_details'));
    const [logoutSubmit] = useMutation(LOGOUTCUSTOMER,{
        context: {
            headers: {
              "Authorization":`Bearer ${token}`,
            }
          }
    });

    const onLogOutClick = () => {
        // getUserLogOut
        dispatch(getUserLogOut(logoutSubmit, navigate))

    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/">Cutomer Book</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        {
                            token || auth?.authenticate ? <>
                                <Nav.Link eventKey={2}>
                                    <Link to="/AddressBookList">Welcome {userDetails?.EMAIL}</Link>
                                </Nav.Link>
                                <Nav.Link eventKey={2}>
                                    {/* <Link to="/SignUp">Log Out</Link> */}
                                    <span onClick={() => onLogOutClick()}>Log Out</span>
                                </Nav.Link>
                            </> : <>
                                <Nav.Link><Link to="/">Sign In </Link></Nav.Link>
                                <Nav.Link eventKey={2}>
                                    <Link to="#">Sign Up</Link>
                                </Nav.Link>
                            </>
                        }
                        {/* <Nav.Link><Link to="/">Sign In </Link></Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="#">Sign Up</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="/AddressBookList">Welcome</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="/SignUp">Log Out</Link>
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar