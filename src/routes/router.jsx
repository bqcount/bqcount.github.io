
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../components/AboutMe/AboutMe'
import MenuMobile from '../components/MenuMobile/MenuMobile'
import Projects from '../components/Projects/Projects'
import MoreInfo from '../components/MoreInfo/MoreInfo'



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
                element:<MenuMobile/>,
               
                
            },
            
            {
                path:'/projects',
                element:<Projects/>,
                children:[
                    {
                        path:'/moreinfo',
                        element:<MoreInfo/>,
                    },
                ]
            }
         
        ]
    }
             
])
export default router