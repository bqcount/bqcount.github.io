
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../components/AboutMe/AboutMe'
import MenuMobile from '../components/MenuMobile/MenuMobile'



const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'',
                element:<AboutMe/>
            },
            {
                path:'/menu',
                element:<MenuMobile/>
            }
         
        ]
    }
             
])
export default router