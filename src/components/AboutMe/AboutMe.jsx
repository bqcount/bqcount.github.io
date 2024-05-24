import { Link } from 'react-router-dom'
import './AboutMe.css'


function AboutMe() {
  return (
    <>
    <div className="content ">
    <div className='content-left'>

         <img src="src\assets\me.jpeg" alt="" className='me-image'/>

      </div>
      <div className='content-right'>
        <div>

        <h3 className='h3-hello-world'> Hello world ... </h3>
        <h1 className='h1-name'> I'm Daniela Romero</h1>
        <div  className="glow-on-hover">
          <h3 className='h3-fullstack'>Full Stack developer</h3>
        </div>

        <p>Passionate about novelty and creativity.</p>
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
