import React from 'react'

const TodoForm = ({onSubmitForm,task,setTask})=>{
    
    return(<form onSubmit = {onSubmitForm}>
            <input type="text" placeholder='Add todo' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <input type='submit' value='Add task' />
        </form>  )
}

export default TodoForm