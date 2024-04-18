
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../components/AboutMe/AboutMe'


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[

            {
                path:'/aboutme',
                element:<AboutMe />
            }
        ]
    }
             
])
export default router