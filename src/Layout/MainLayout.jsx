
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import AboutMe from '../components/AboutMe/AboutMe'
function MainLayout() {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Outlet/>
    </>
  )
}

export default MainLayout