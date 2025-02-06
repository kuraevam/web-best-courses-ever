import {NavLink, Outlet} from "react-router";
import {Container, Nav, Navbar} from "react-bootstrap";

function Layout() {
    return (<div className="bg-dark text-white">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">Best courses ever</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>)
}

export default Layout;
