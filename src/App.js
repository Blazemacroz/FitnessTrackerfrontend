import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/esm/Navbar.js";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Components/Home.jsx";
import Routines from "./Components/Routines.jsx";
import MyRoutines from "./Components/MyRoutines";
import Activities from "./Components/Activities.jsx";
import LoginLogout from "./Components/LoginLogout.jsx";
import { fetchRoutines } from "./api/ajax-helpers.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function App() {
  const [allRoutines, setAllRoutines] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const routinePromise = fetchRoutines();
    Promise.all([routinePromise]).then((res) => setAllRoutines(res[0]));
  }, [token]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar sticky="top" bg="success" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand> Welcome to Brandon's Fitness Tracker</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="mr-auto">
                <LinkContainer to="/Home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Routines">
                  <Nav.Link>Routines</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/My_Routines">
                  <Nav.Link>My Routines</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Activities">
                  <Nav.Link>Activities</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Login_Logout">
                  <Nav.Link>Login/Logout</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="main-section">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Routines">
            <Routines allRoutines={allRoutines} />
          </Route>
          <Route path="/My_Routines">
            <MyRoutines />
          </Route>
          <Route path="/Activities">
            <Activities />
          </Route>
          <Route path="/Login_Logout">
            <Login_Logout />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
