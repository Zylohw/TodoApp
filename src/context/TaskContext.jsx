import { createContext, useState, useEffect } from "react"
import { Tareas } from "../utils/tarea"

// definimos el nombre del contexto, almacenara los datos
export const TaskContext = createContext() 

// definimos el componente
export function TaskContextProvider({ children }) {

  // para generalizar en pocas palabas que FormTask pueda acceder al arreglo de tareas. 
  const [task, setTask] = useState([]) 

  // Función para crear nueva tarea.
  // * newTask es un objeto eso quiere decir que tiene que tener id,name y description.
  function createTask(newTask) {
    // se actualiza el estado con el nuevo arreglo modificado.
    setTask([...task, {
      id: task.length,
      name: newTask.title,
      description: newTask.description
    }])

  }
  // función para eliminar las tareas.
  function deleteTask(taskId) {
    setTask(Tareas.filter(tarea => tarea.id !== taskId))
  }

   // cada que se renderice el componente app se actualiza el estado de tareas.
   useEffect(() => {
    setTask(Tareas)
  }, [])

  return (
    // se usa el TaskContext.Provider para asingar el componente de retorno con el contexto y usamos value para que a la hora de usar dicho contexto podamos acceder a los valores que tenemos.
    <TaskContext.Provider value={{ task,createTask,deleteTask:deleteTask}}>
      {children}
    </TaskContext.Provider>
  )
}