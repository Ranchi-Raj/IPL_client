import React from 'react'
import './App.css'
import LoginPage from './components/loginPage'
import { useAuth0 } from "@auth0/auth0-react";
import DashBoard from './components/Dashboard'
function App() {
    
    const { isAuthenticated,user } = useAuth0();
  return (
    <div>
      {isAuthenticated ? <DashBoard/>
      : <LoginPage/>
      }
    </div>
  )
}

export default App
