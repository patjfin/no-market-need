import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand
} from 'reactstrap';
import { Link } from "gatsby"


class MainNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggle = () => {
    this.setState(state => ({isOpen: !state.isOpen}))
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand></NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <div class='main-nav-item'>
                <Link to="/">
                  <NavItem>
                      All
                  </NavItem>
                </Link>
              </div>
              <div class='main-nav-item'>
                <Link to="/YC">
                  <NavItem>
                      YC
                  </NavItem>
                </Link>
              </div>
              <div class='main-nav-item'>
                <Link to="/">
                  <NavItem>
                    PM
                  </NavItem>
                </Link>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    );
  }
}

export default MainNav;