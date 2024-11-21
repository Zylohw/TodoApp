import "../styles/formstyle.css"
import { useState } from "react"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export function FormTask(){
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const {createTask} = useContext(TaskContext)
  
  // función que controla cuando el formulario se sube esto llama una función prop que pide un objeto donde esta el titulo y la descripción que son estados que son seteados a la hora de se ejecuta su evento onChange.
  const handleSubmit = (e)=>{
    e.preventDefault()
    createTask({title,description})
  }

 
  
  return(
    <form className='form-main' onSubmit={handleSubmit}>
      <input type="text" placeholder="Escrbire el titulo de tu tarea"
        onChange={(e)=>{ setTitle(e.target.value)}}
        className="title-input"
      />
      <br />
      <input type="text" placeholder="¿En que consiste tu tarea?"  onChange={(e) => {setDescription(e.target.value)}} className="description-input"/>
      <br />
      <input type="submit" value="Subir tarea" className="submit" onChange={handleSubmit}/>
      <br />
    </form>
  )
}