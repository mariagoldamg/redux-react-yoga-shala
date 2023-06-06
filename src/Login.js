import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated&&(<div>
    <div className="blockAbout">
<p> Please log in to accesss our <span className="time">Retreat Updates and Early Bird Discounts. </span></p>
    </div>


    <div className="blockAbout">
  <button className="deleteBtn" onClick={() => loginWithRedirect()}>Log In</button>
  </div>
  
  </div>
  ))
};

export default Login;