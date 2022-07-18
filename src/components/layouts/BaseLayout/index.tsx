import { useEffect, useLayoutEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

import { useAppDispatch } from '../../../store/configureStore';

// Actions
import { getUser } from '../../../store/user/user.actions';

// Assets
import { shawarma2 } from '../../../assets/images';

// Styles
import styles from './BaseLayout.module.css';


const BaseLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">New Shawarma</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">Order</Link>
              <Link className="nav-link" to="/my-orders">My Orders</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <div className={`mb-2 ${styles['shawarma-img-container']}`}>
          <img className={`d-block w-100 h-100 ${styles['shawarma-img']}`} src={shawarma2} alt="shawarma"/>
        </div>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default BaseLayout;
