import React,{useState} from 'react'


const Todo = ()=>{
    const [task,setTask] = useState('')
    const [tasks,setTasks]= useState([])
    const handleAddTaskClick = ()=>{
        
        setTasks([...tasks,{name:task,completed:false,id:Math.random()*1000}])
        setTask('')
    console.log(task);
        
    }
    const handleChangeCompleted = (t)=>{
        
        setTasks(tasks.map((item)=>{
            if(item.id === t.id){

                return {...item,completed:!item.completed}
            }
            return item
        }))
    }

    const handleDeleteTask = (t)=>{
        setTasks(tasks.filter(item=>item.id!==t.id))
    }

    

    return(
        <div className="main-div">
            <input type="text" placeholder='Add todo' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button onClick = {handleAddTaskClick}>Add task</button>
            <ul>{tasks.map((t)=>
                <li key={t.id}>
                
                <span className={t.completed?'red':'blue'}>{t.name}</span>
                <input type="checkbox" onClick={()=>handleChangeCompleted(t)}/>
                <button onClick={()=>{handleDeleteTask(t)}} > X </button>
                </li>
            )}</ul>
        </div>
        
        
        
        )
    
            
        
    
}

export default Todo