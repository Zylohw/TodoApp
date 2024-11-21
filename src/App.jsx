import { Lista } from './components/Lista'
import { FormTask } from './components/FormTask'

import './App.css'

function App() {

  return (
    <>
      <h1 className='title'>Todo App <img src="src\assets\to-do-list.png" alt="todo-icon" className='icon' /></h1>
      <FormTask />
      <Lista />
    </>
  )
}

export default App
