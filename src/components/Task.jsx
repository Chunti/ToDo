import {useState} from 'react'
import apiFacade from '../apiFacade'

const Task = (props) => {
  const [task, setTask] = useState({
    ...props,
  })

  const handleEdit = () => {
    setTask({...task, editable: true})
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const keyName = event.target.id;
    setTask({...task, [keyName]:value})
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    delete task["editable"];
    setTask({...task})
    apiFacade.editTask(task, (res) => {
      console.log(res)
    });
  }


  const handleDelete = () => {
    apiFacade.deleteTask(task.id);
    setTask()
  }
  let now = new Date()
  let currentDate = now.getFullYear() + "-" +  (now.getMonth() + 1).toString().padStart(2, '0') + "-" + now.getDate().toString().padStart(2, '0')
  //console.log(currentDate)

  if (task !== undefined)
    if (task.editable)
      return (
        <form id={props.id} onSubmit={handleSubmit}>
          <input type="text" id="desc" onChange={handleChange} />
          <input type="date" id="date" onChange={handleChange} />
          <input type="time" id="time" onChange={handleChange} />
          <button id='edit' onClick={handleEdit}>Edit</button>
          <button id='delete' onClick={handleDelete}>Delete</button>
        </form>
      )
    else
      return (
        <div id={task.id}>
          <p>{task.desc}</p>
          <p>{task.date}</p>
          <p>{task.time}</p>
          <button id='edit' onClick={handleEdit}>Edit</button>
          <button id='delete' onClick={handleDelete}>Delete</button>
        </div>
      )


}

export default Task
