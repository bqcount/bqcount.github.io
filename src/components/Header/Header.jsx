import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header">
      <Link to='/aboutme' className='link-header'>
        <h3 className='linterna'>About me</h3>
      </Link>
      <Link to='/experience' className='link-header'>
        <h3 className='linterna'>Experience</h3>
      </Link>
      <Link to='/projects' className='link-header'>
         <h3 className='linterna'>Projects</h3>
      </Link>
    </div>
  )
}

export default Header