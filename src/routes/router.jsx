
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../components/AboutMe/AboutMe'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'




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
            }
         
        ]
    }
             
])
export default router