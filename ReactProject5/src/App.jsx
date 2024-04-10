

import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <div className='w-lvw h-lvh flex justify-center items-center flex-col'>
      <Login />
        
      </div>
      
    </UserContextProvider>
  )
}

export default App
