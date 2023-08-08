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
import {
  fetchRoutines,
  fetchActivities,
  fetchUser,
  fetchUserRoutines,
} from "./api/ajax-helpers.js";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const userPromise = fetchUser(storedToken);
      const routinePromise = fetchRoutines();
      const activitiesPromise = fetchActivities();
      Promise.all([userPromise, routinePromise, activitiesPromise]).then(
        async (res) => {
          setCurrentUser(res[0]);
          setAllRoutines(res[1]);
          setAllActivities(res[2]);
          const userRoutines = await fetchUserRoutines(
            storedToken,
            setMyRoutines(userRoutines)
          );
        }
      );
    } else {
      const routinesPromise = fetchRoutines();
      const activitiesPromis = fetchActivities();
      Promise.all([routinesPromise, activitiesPromise]).then((res) => {
        setAllRoutines(res[0]);
        setAllActivities(res[1]);
      });
    }
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
                {token ? (
                  <LinkContainer to="/My_Routines">
                    <Nav.Link>My Routines</Nav.Link>
                  </LinkContainer>
                ) : null}
                <LinkContainer to="/Activities">
                  <Nav.Link>Activities</Nav.Link>
                </LinkContainer>
                {token ? (
                  <LinkContainer to="/LoginLogout">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                ) : (
                  <LinkContainer to="/LoginLogout">
                    <Nav.Link>Logout</Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="primary-section">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Routines">
            <Routines allRoutines={allRoutines} token={token} />
          </Route>
          <Route path="/My_Routines">
            <MyRoutines />
          </Route>
          <Route path="/Activities">
            <Activities />
          </Route>
          <Route path="/LoginLogout">
            <LoginLogout
              token={token}
              setToken={setToken}
              currentUser={currentUser}
            />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
