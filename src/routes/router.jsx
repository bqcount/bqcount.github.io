
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../components/AboutMe/AboutMe'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Training from '../components/Training/Training'




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
                path:'/projects',
                element:<Projects/>,
                
            },
            {
                path:'/experience',
                element:<Experience/>
            },
            {
                path:'/training',
                element:<Training/>
            }
         
        ]
    }
             
])
export default router