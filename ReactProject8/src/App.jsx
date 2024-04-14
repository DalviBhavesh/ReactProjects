import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>

      <div className='bg-orange-500  h-2/3 w-lvw flex flex-wrap items-center justify-center text-balance text-4xl'>
          <AddTodo/>
      </div>
        <Todo />
    </>
  )
}

export default App
