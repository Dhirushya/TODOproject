import "./index.css"
import {useState} from "react"




export default function App(){
const [id,setId]=useState("");
const [name,setName]=useState("");
const [age,setAge]=useState("");
const [emp,setEmp]=useState([{
 id: 1,name:"  ABC",age:"  3"}])





const handleAdd=()=>{
    console.log(id,name,age);
    setEmp([...emp,{id:id,name:name,age:age}]);
    setId("");setAge("");setName("")
}


const handleInd=(id)=>{
      setEmp(emp.filter(e=>e.id!==id))
}


const handleAll=()=>
{
    setEmp([]);
}




return(
    <div className="App">
    <h1>REACT CRUD APPLICATION</h1>
    <input type ="text" placeholder="Enter Id" 
     value={id} onChange={e=>setId(e.target.value)}
    />
    <br/>
     <input type ="text" placeholder="Enter name"
     value={name} onChange={e=>setName(e.target.value)}
    />
    <br/>
     <input type ="text" placeholder="Enter age"
     value={age} onChange={e=>setAge(e.target.value)}
    />
    <br/><br/>
    <button onClick={handleAdd} className="add">ADD</button>
    <br/><br/>
    <button onClick={handleAll} className="del">DELETE ALL</button>
    <br/><br/>
    {emp.map(e=>(
        <div>
            {e.id}{e.name}{e.age}<button className="delete"
            onClick={()=>{handleInd(e.id)

            }
                }>X</button>
        </div>
    ))}
    </div>
);
}
