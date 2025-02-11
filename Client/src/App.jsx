import './App.css'
import { ColorModeButton } from './components/ui/color-mode' //for dark mode 
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


function App() {

  return (
    <>
      <ColorModeButton />
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App