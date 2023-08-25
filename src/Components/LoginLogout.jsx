import React from "react";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import Login from "./Login";


const LoginLogout = ({ token, setToken, currentUser }) => {
  return (
    <div id="LoginLogout">
      { !token ?
          <>
            <Login setToken={setToken} />
            <Register setToken={setToken} />
          
          </>
          :
          <>
            <h1>Logged In As {currentUser.userName}</h1>
            <Button varient="primary" onClick={() => {
              setToken("");
              localStorage.removeItem("token");
            }} >Logout</Button>

          </>

            }
    </div>
  )
}
export default LoginLogout;