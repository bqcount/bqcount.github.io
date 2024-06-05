import './Projects.css'
import { useState,useEffect } from 'react'


function Projects() {
  const [showInfo, setShowInfo] = useState('');
  const infoShow = "info-show"

 

  
  return (
    <div className='content-projects'>
  
        <div className="card">
          <div className='div-img'>
             <img src="src\assets\logocompicar.png" alt="" className='img-project' />
          </div>
          <div className='div-info'>
              <button className='button-info' onClick={()=>{setShowInfo(infoShow)}}>More info</button>
          </div>
          {showInfo && (
          <div className={`${infoShow}`}>
            <p>Esta es la información adicional que deseas mostrar.</p>
          </div>
        )}
        </div>
        
    </div>
  )
}

export default Projects