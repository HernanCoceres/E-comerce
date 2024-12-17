import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import CartNav from './CartNav'
import { Button } from 'react-bootstrap';
import styles from'./Modules/NavBar.module.css'
function NavBar (){
    return(

      <Navbar className={styles.nav_bar} bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Remini</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
            <Nav.Link as={Link} to='/category/fragrances'>Fragrances</Nav.Link>
            <Nav.Link as={Link} to='/category/furniture'>Furniture</Nav.Link>
            <Nav.Link as={Link} to='/category/groceries'>Groceries</Nav.Link>
          </Nav>
          <Button variant="outline-warning" className={styles.button_container_cart} as={Link} to='/CartContainer' ><CartNav/></Button>
        </Container>
      </Navbar>
    )
}

export default NavBar