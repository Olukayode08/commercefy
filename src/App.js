import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import VerifyAcc from './pages/VerifyAcc'
import Protected from './ProtectedRoutes/Protected'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route element={<Protected />}>
          <Route path='/verify-acc' element={<VerifyAcc />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
