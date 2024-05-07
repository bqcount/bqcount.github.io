import './AboutMe.css'
function AboutMe() {
  return (
    <>
    <div className="content neon-border">
     <div className='photo-profile'>
         <img src="src\assets\me.jpeg" alt="" style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} />
      </div>
      <div className='content-right'>

        <h3> Hello world... </h3>
        <h1> I am Daniela Romero</h1>
        <h3>Full Stack developer</h3>
        
        <p>and a lover of freedom, creativity and colors.</p>
        <div className='icons-div'>
          <img src="src\assets\icons8-github-50.png" alt="" />
          <img src="src\assets\icons8-linkedin-50.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe 
