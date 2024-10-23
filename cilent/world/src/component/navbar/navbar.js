import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavDropdown, Offcanvas, FormControl} from "react-bootstrap";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';
import './Nav.css';

function Navigation() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const username = useSelector((state) => state.user?.username);
  const [show, setShow] = useState(false);

  //items to search from (replace with actual data)
  const item = [
    { name: "Men", path: "/Men" },
    { name: "Women", path: "/Women" },
    { name: "Kid", path: "/Kid"},
    { name: "Shoe", path: "/shoe"},
  ];

  // useEffect to filter items based on search
  useEffect(() => {
    const filters = item.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filters);
  }, [search]); 

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {totalUniqueItems}=useCart()
  return (
    <>
      <Navbar className="custom-navbar">
        <NavbarBrand className="navbar-brand">
          Imperial Gowns
        </NavbarBrand>
        <Nav>
          <ul className="navbar-menu">
            <li className="custom-search">
              <FormControl type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="search"/>
              {search && (
                  <ul type="none" className="search-results">
                    {filtered.map((item, index) => (
                      <li key={index} className="search-word">
                        <Link to={item.path} onClick={() => setSearch("")} className="underline">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
              )}
            </li>
            <li className="custom-profile-icon">
              <NavDropdown title={isAuthenticated ? username || "Profile" : "Login"} className="custom-profile">
                {isAuthenticated ? (
                  <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                )}
              </NavDropdown>
            </li>
            <li className="custom-Home">
              <Link to="/" className="custom-home-cart">
                <FaHome className="home-icon" /> Home
              </Link>
            </li>
            <li className="custom-Cart">
              <Link to="/cart" className="custom-home-cart">
                <FaShoppingCart className="cart-icon" /> Add Cart ({totalUniqueItems})
              </Link>
            </li>
            <li className="custom-menu">
              <span onClick={handleShow}>Menu</span>
            </li>
          </ul>
        </Nav>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} backdrop={true} scroll={false} className="menu-color">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul type="none">
          <li>
              <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
              {search && (
                <div className="search-results">
                  <ul type="none">
                    {filtered.map((item, index) => (
                      <li key={index} className="search-word">
                        <Link to={item.path} onClick={() => setSearch("")}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="/" className="canvas-link">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="canvas-link">Add Cart</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
