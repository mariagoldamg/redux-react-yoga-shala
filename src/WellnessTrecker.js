import { MyLogs } from "./MyLogs";
import { useEffect, useState } from "react";
import { getAllLogs, addLog, editLog, deleteLog } from "./FetchLogs";
import YogaShalaLogo from "./YogaShalaLogo.png";



const WellnessTrecker = ()=>{
const [myLog, setLog] = useState([]);
const [name, setName] = useState('')
const [editing, setEditing] = useState(false);
const [logId, setLogId] = useState('');

useEffect(()=>{getAllLogs(setLog)},[])

const updatingInInput = (_id, name) =>{
    setEditing(true)
    setName(name)
    setLogId(_id)
}

    return(
<div>
<div className='blockAbout'>
<img alt='logo' className="yogaIcon" src={YogaShalaLogo}/>
<h1>Your Wellness Tecker</h1></div>
<div className='blockAbout'>

    <input 
    className="treckerInput"
    type='text' 
    placeholder='Log your Activity'
    value = {name}
    onChange={(e)=>setName(e.target.value)} >
    </input>

    </div>
<div className='blockAbout'><p className='example'>Ex: March 27/2023 Meditation 20 mins, felt agitaded before, felt calm after.</p></div>

<div className='blockAbout'>
    <button disabled={!name} onClick={ editing ?()=> editLog (logId,name,setName,setLog,setEditing): ()=>
    addLog(name,setName,setLog)} className='deleteBtn'>
        {editing ? "Edit" : "Add"} 
    </button>
</div>
<br></br>
<br></br>

<div>
    {myLog.map((log)=><MyLogs key={log._id} text={log.name}
    updatingInInput = {()=>updatingInInput(log._id,log.name)}
    deleteLog = {()=>deleteLog(log._id, setLog)}
    />)}
</div>
</div>

)
    
}

export default WellnessTrecker;