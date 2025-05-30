import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContextProvider } from './context/TaskContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>,
)
