import './App.css'
import { ColorModeButton } from './components/ui/color-mode' //for dark mode 
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TopHeader from './components/layout/TopHeader'
import AuthCheck from './components/auth/AuthCheck'

function App() {
  return (
    <>
      <AuthCheck />
      <ColorModeButton />
      <TopHeader/>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
