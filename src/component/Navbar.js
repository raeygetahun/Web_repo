import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Link, Routes} from 'react-router-dom';
import About from '../page/About';
import Portfolio from '../page/Portfolio';
import Timeline from '../page/Timeline';
import Home from '../page/Home';
import Container from "react-bootstrap/Container"
import '../main.css' 

function Navbarcomp(){

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/aboutT">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/timeline">Timeline</Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    
    );

}

export default Navbarcomp;