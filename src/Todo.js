import React,{useState} from 'react'
import TodoItem from './TodoItem'

const Todo = ()=>{
    const [task,setTask] = useState('')
    const [tasks,setTasks]= useState([])
    const handleAddTaskClick = ()=>{
        
        setTasks([...tasks,{name:task,completed:false,id:Math.random()*1000}])
        setTask('')
    console.log(task);
        
    }
    

    

    

    return(
        <div className="main-div">
            <input type="text" placeholder='Add todo' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button onClick = {handleAddTaskClick}>Add task</button>
            <ul>{tasks.map((t)=>
                <TodoItem setTasks={setTasks} t={t} tasks={tasks} />
                
            )}</ul>
        </div>
        
        
        
        )
    
            
        
    
}

export default Todo