import { Link, NavLink } from "react-router-dom";

function Navbar(){
    
    return(
        <>
        <nav>
            <span  className="portfolio">Portfolio</span>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;


 {/*<Navbar className="custom-navbar" variant="dark">
            <Container className="d-flex justify-content-between align-items-center">
              
                    <Nav className="me-auto">
                  
                      <Nav.Link className="justify-conten" href="#PORTFOLIO" >PORTFOLIO</Nav.Link>
                      
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/project">Projects</Nav.Link>
                        
                    </Nav>
                   
                </Container>
            </Navbar>*/}