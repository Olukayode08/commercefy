import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
