import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";
import Footer from "./Footer";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return(
    isAuthenticated&&(<div>
    <div> <Secret/></div>
    <div className="blockAbout">
    <button className="deleteBtn"onClick={() => logout()}>Log Out</button>
    </div>
    <br></br>
    <br></br>
    <div> <Footer/></div>
    </div>
    ))
};

export default Logout;