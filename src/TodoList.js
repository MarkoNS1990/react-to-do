import React from 'react'

const TodoList = ({setTasks,tasks})=>{

    const handleDeleteTask = (t)=>{
        setTasks(tasks.filter(item=>item.id!==t.id))
    }

    const handleChangeCompleted = (t)=>{
        
        setTasks(tasks.map((item)=>{
            if(item.id === t.id){

                return {...item,completed:!item.completed}
            }
            return item
        }))
    }
    return(
        <ul>{tasks.map((t)=>
        <li key={t.id}>
                <input type="checkbox" onClick={()=>handleChangeCompleted(t)}/>
                <span className={t.completed?'red':'blue'}>{t.name}</span>
                <span>Created at: {t.created}</span>
                <button onClick={()=>{handleDeleteTask(t)}} ><i className="fas fa-trash-alt"></i> </button>
        </li>
        )}</ul>
    )
}

export default TodoList