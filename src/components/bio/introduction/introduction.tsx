import './introduction.scss';

const Introduction: React.FC = () => {

  return (
    <>
      <h1>
        Hey, I'm John Doe<span className='size-pop color-pop'>.</span>
      </h1>
      
      <h2>
        I'm a <span className='color-pop'>Full Stack Software Developer</span>
      </h2>

      <p>
        This website isn't just a showcase of my work as a software developer, but it's also a peek into my world. 
        Here, you'll see how I blend my love for coding with my unique style.
        The <span className='color-pop'>code</span> for this website is 
        <span className='color-pop'> publicly available</span> on my GitHub to provide insight
        on my approach to system development.
      </p>
    </>
  )
}

export default Introduction