import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { setAdmin } from "../../pages/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminInfo);
  const handleOnLoggout = () => {
    signOut(auth).then(() => {
      // reset user admin state
      dispatch(setAdmin({}));
      navigate("/login");
    });
  };
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
    >
      <Container>
        <Link
          to='/'
          className='navbar-brand'
        >
          Library Management Systems
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link
              className='nav-link'
              to='/'
            >
              Home
            </Link>

            {admin?.uid ? (
              <>
                <Link
                  className='nav-link'
                  to='/dashboard'
                >
                  Dashboard
                </Link>
                <Link
                  className='nav-link'
                  to='/signup'
                >
                  Sign Up
                </Link>
                <Link
                  className='nav-link'
                  to='#'
                  onClick={handleOnLoggout}
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className='nav-link'
                  to='/login'
                >
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
