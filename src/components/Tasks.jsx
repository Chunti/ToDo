import {useState,useEffect} from 'react'
import Task from './Task'


const Tasks = () => {

    
    const [tasks, setTasks] = useState([]);
    //const [booksChanged, setBooksChanged] = useState(false);
  
    useEffect( () => {
        const getData = async () => {
            const reponse = await fetch('http://localhost:5000/tasks');
            const data = await reponse.json();
            console.log(data);
            setTasks(data);
        }
        getData();
    },[]);

    
  return (
    <div>
        {tasks.length && tasks.map(task => {
            return (
                <Task id={task.id} desc={task.desc} time={task.time} date={task.date} />
            )
        })}
    </div>
  )
}

export default Tasks
