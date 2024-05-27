import './Header.css'
import { Link } from 'react-router-dom'
import { MdApps } from "react-icons/md";


function Header() {
  return (
    <div className='fragment-header'>
      <Link to='/menu'>
      <MdApps className='menu-icon ' />   
      </Link>
    <div className="header">
      <Link to='/experience' className='link-header'>
        <h3 className='linterna'>Home</h3>
      </Link>
      <Link to='/experience' className='link-header'>
        <h3 className='linterna'>Experience</h3>
      </Link>
      <Link to='/projects' className='link-header'>
         <h3 className='linterna'>Projects</h3>
      </Link>
    
    </div>
    </div>
  )
}

export default Header