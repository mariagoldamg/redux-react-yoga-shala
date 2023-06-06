import { useAuth0 } from "@auth0/auth0-react";
import YogaShalaLogo from "./YogaShalaLogo.png";



const Secret = ()=>{
const { isAuthenticated } = useAuth0();


    return(
isAuthenticated&& (
<div>
<div className="blockAbout">
<img alt='logo'  className="yogaIcon" src={YogaShalaLogo}/>
<h1>Yoga Shala Retreats</h1>
</div>
<br></br>
<br></br>
<div className="schedule">
<div className="yogaBlock">
    <h4>7 Day Shri-Lanka Oceanview Retreat</h4>
    <img alt="retreat" className="retreat" src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYSUyMHJldHJlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
    <br></br>
<p>October 12 - 19, 2023,  <br></br><br></br>
    please contact Yoga Shala for more info </p>
</div>

<div className="yogaBlock">
    <h4>Weekend Yoga Getaway</h4>
    <img alt="retreat" className="retreat" src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvZ2ElMjByZXRyZWF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
    <br></br>
<p>August 19 - 20, 2023,  <br></br><br></br>
    please contact Yoga Shala for more info </p>
</div>



<div className="yogaBlock">
    <h4>Yoga Hike</h4>
    <img alt="retreat" className="retreat" src="https://images.unsplash.com/photo-1607914660217-754fdd90041d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHlvZ2ElMjByZXRyZWF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
    <br></br>
<p>July 15, 2023  <br></br><br></br>
    please contact Yoga Shala for more info </p>
</div>
</div>
</div>

)
    )
}

export default Secret;