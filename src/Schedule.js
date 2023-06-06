import dataSliders from "./data/dataSliders";
import YogaSliders from "./YogaSliders";
import YogaShalaLogo from "./YogaShalaLogo.png";
import Footer from "./Footer";

const Schedule = ()=>{


    return(<div>
<div className="blockAbout">
<img alt='logo'  className="yogaIcon" src={YogaShalaLogo}/>
<h1>Yoga Shala Practices</h1>
</div>


<div className="schedule">
{dataSliders.map ((yogaItem, index)=><YogaSliders yogaItem={yogaItem} key={index} />)}
</div>

<Footer/>

    </div>)
}

export default Schedule;