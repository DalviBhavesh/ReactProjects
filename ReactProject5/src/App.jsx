

import Login from './component/Login'
import Nav from './component/Nav'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <div className='w-lvw h-lvh flex justify-center items-center flex-col'>
      <Nav />
      <Login />
        
      </div>
      
    </UserContextProvider>
  )
}

export default App
