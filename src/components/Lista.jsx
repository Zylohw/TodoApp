import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


export function Lista() {

  const { deleteTask, task } = useContext(TaskContext)

  if (task.length === 0) {
    return <h1 className="no-task">No hay tareas...</h1>
  }


  return (
    <ul className='task-list'>

      {
        // recuerda que al modificarla todo lo que esta en este arreglo se modificara. 
        task.map(tarea => (
          <div key={tarea.id} className='task-card'>
            <h1>{tarea.name}</h1>
            <p>{tarea.description}</p>
            <button className="delete-button" onClick={() => deleteTask(tarea.id)}><img src="src\assets\trash-bin.png" alt="trashIcon" className="delete-img" /></button>
          </div>
        ))
      }

    </ul>
  )
}