import React,{useState} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
const Todo = ()=>{
    const [task,setTask] = useState('')
    const [tasks,setTasks]= useState([])
    
    
    
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        setTasks([...tasks,{name:task,completed:false,id:Math.random()*1000}])
        setTask('')
    }
    

    

    return(
        <div className="main-div">
            <TodoForm onSubmitForm = {handleSubmitForm} task={task} setTask={setTask}/>
            <TodoList setTasks={setTasks} tasks={tasks} />
        </div>
        )
    
}

export default Todo