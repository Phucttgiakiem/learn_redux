import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col,Container,Row} from 'reactstrap'
import './Header.scss';
import PropTypes from 'prop-types';

Header.propTypes = {

};

function Header() {
  return (
    <header className="header">
        <Container>
            <Row className="justify-content-between">
                <Col xs="auto">
                    <a 
                      href="https://www.youtube.com/watch?v=MpD8vxfkzas&list=PLeS7aZkL6GOvCz3GiOtvtDXChJRuebb7S&index=7" 
                      className="header__link header__title"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Easy Frontend
                    </a>
                </Col>
                <Col xs="auto">
                    <NavLink 
                        exact 
                        className="header__link"
                        to="/photo"
                        activeClassName="header__link--active"    
                    >
                      Redux Project
                    </NavLink>
                </Col>
            </Row>
        </Container>
    </header>
  );
}

export default Header;