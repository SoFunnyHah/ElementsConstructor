import {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col,
} from 'reactstrap';

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const links = ['Home', 'Table'];
    return (
      <Row>
      <Col>
        <Navbar>
          <NavbarBrand>Конструктор Бур 3000</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              {links.map((link) => (
                <NavItem key={link}>
                  <NavLink to={`/${link}`}>{link}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
    );
}

export default NavBar;
