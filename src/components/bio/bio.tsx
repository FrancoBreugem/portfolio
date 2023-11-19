import { SvgIconEnum } from '../../enums/svg-icon-enum';
import SvgIcon from '../svg-icon/svg-icon';
import './bio.scss';
import TechStack from './tech-stack/tech-stack';

const Bio: React.FC = () => {

  return (
    <div className='bio'>
      <h1>
        Hey, I'm John Doe<span className='size-pop color-pop'>.</span>
      </h1>
      
      <h2>
        I'm a <span className='color-pop'>Full Stack Software Developer</span>
      </h2>

      <p>
        From ideas to deployments, I craft robust web applications with a keen <span className='color-pop'>focus on front-end frameworks</span>. Skilled in <span className='color-pop'>languages</span> like SQL, C#, Python, and JavaScript, I also handle various <span className='color-pop'>tools</span> including Azure DevOps, Visual Studio, SQL Server, and GitHub with comfort.
      </p>

      <TechStack />
      
      {/* <div>
        <SvgIcon 
          icon={SvgIconEnum.LinkedIn} 
          url='https://www.linkedin.com/in/franco-breugem-3b4533184/' 
        />
      </div> */}
    </div>
  )
}

export default Bio