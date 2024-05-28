import { FaCode } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import './MenuMobile.css';
import { Link} from "react-router-dom";

function MenuMobile() {
  return (
    <div className="content-menu">
      <Link to='/projects'>
        <div className="menu-item">
            <div className="div-icon ">
              <FaCode/>
            </div>
            <div className="div-text">
            Projects
            </div>
        </div>
      </Link>
        <div className="menu-item">
            <div className="div-icon">
              <FaBookReader/>
            </div>
            <div className="div-text">
            Experience
            </div>
        </div>
        <div className="menu-item">
            <div className="div-icon">
              <RiContactsBook3Fill/>
            </div>
            <div className="div-text">
            Contact me
            </div>
        </div>
      
    </div>
  );
}

export default MenuMobile;
