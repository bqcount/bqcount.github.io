import { Link } from 'react-router-dom'
import './AboutMe.css'
function AboutMe() {
  return (
    <>
    <div className="content neon-border">
    <div className='content-left'>

         <img src="src\assets\me.jpeg" alt="" style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} />

      </div>
      <div className='content-right'>
        <div>

        <h3> Hello world ... </h3>
        <h1> I'm Daniela Romero</h1>
        <div  className="glow-on-hover">
          <h3>Full Stack developer</h3>
        </div>

        <p>and a lover of freedom, creativity and colors.</p>
        <div className='icons-div'>
          <Link to="https://github.com/bqcount" className='network-links'>
          <img src="src\assets\icons8-github-50.png" alt="" className='git-linkedn' />
          </Link>
          <Link to="https://es.linkedin.com/in/daniela-romero-garcia" className='network-links'>
          <img src="src\assets\icons8-linkedin-50.png" alt="" className='git-linkedn' />
          </Link>
        </div>
      </div>
    </div>
        </div>
   

    {/*   <div className="holder">  
        <div className="bar1 left"></div>
        <div className="bar top"></div>
        <div className="bar1 right"></div>
        <div className="bar bottom"></div>
      </div> */}
    </>
  )
}

export default AboutMe 
