import React, { useMemo } from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import SearchBox from "./SearchBox";
import { resetCart } from "../slices/cartSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.error(err);
      // Handle error, maybe display an error message to the user
    }
  };

  // Memoize cart item count
  const cartItemCount = useMemo(
    () => cartItems.reduce((a, c) => a + c.qty, 0),
    [cartItems]
  );

  const isHomePage = location.pathname === "/"; // Check if it's the homepage

  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox />
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItemCount > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItemCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Second Navbar with Dropdowns, render only on homepage */}
      {isHomePage && (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="NEW" id="dropdown1">
                  <LinkContainer to="/shop-all">
                    <NavDropdown.Item>Shop All</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/suit-sets">
                    <NavDropdown.Item>Suit Sets</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/kurtas-tops">
                    <NavDropdown.Item>Kurtas & Tops</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/dresses">
                    <NavDropdown.Item>Dresses</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="KURTAS & TOPS" id="dropdown2">
                  <LinkContainer to="/shop-all">
                    <NavDropdown.Item>Shop All</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/kurtas">
                    <NavDropdown.Item>Kurtas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/kurtis-tops">
                    <NavDropdown.Item>Kurtis & Tops</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="SUIT SETS" id="dropdown3">
                  <LinkContainer to="/shop-all">
                    <NavDropdown.Item>Shop All</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/straight-suit-sets">
                    <NavDropdown.Item>Straight Suit Sets</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/anarkali-suit-sets">
                    <NavDropdown.Item>Anarkali Suit Sets</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="DRESSES" id="dropdown4">
                  <LinkContainer to="/shop-all">
                    <NavDropdown.Item>Shop All</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/casual-dresses">
                    <NavDropdown.Item>Casual</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/festive-dresses">
                    <NavDropdown.Item>Festive</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/wedding-dresses">
                    <NavDropdown.Item>Wedding</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="COLLECTIONS" id="dropdown5">
                  <LinkContainer to="/shop-all">
                    <NavDropdown.Item>Shop All</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/festive-collections">
                    <NavDropdown.Item>Festive</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/wedding-collections">
                    <NavDropdown.Item>Wedding</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/casual-wear-collections">
                    <NavDropdown.Item>Casual Wear</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
