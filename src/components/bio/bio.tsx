import './bio.scss';
import LinkedInIcon from '../../assets/linkedin.svg'

function Bio() {

  return (
    <div className='bio'>
      <h1>
        Hey, I'm Franco.
      </h1>

      <p>
        Hey there! I'm Franco, a full stack web developer hailing from Pretoria, South Africa. From ideas to deployments, I craft robust web applications with a keen focus on front-end frameworks like Angular and ReactJS. Skilled in languages like SQL, C#, Python, and JavaScript, I also handle various tools including Azure DevOps, Visual Studio, SQL Server, and GitHub with comfort.
      </p>

      <div>
        <img src={LinkedInIcon} alt="LinkedIn Icon" />
      </div>
    </div>
  )
}

export default Bio