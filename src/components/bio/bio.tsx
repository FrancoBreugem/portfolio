import { SvgIconType } from '../../enums/svg-icon-type';
import SvgIcon from '../svg-icon/svg-icon';
import './bio.scss';

const Bio: React.FC = () => {

  return (
    <div className='bio'>
      <h1>
        Hey, I'm Franco<span className='size-pop color-pop'>.</span>
      </h1>

      <h2>
        I'm a <span className='color-pop'>Full Stack Software Developer</span>
      </h2>

      <p>
        Hey there! I'm Franco, a full stack web developer hailing from Pretoria, South Africa. From ideas to deployments, I craft robust web applications with a keen <span className='color-pop'>focus on front-end frameworks</span> like Angular and ReactJS. Skilled in <span className='color-pop'>languages</span> like SQL, C#, Python, and JavaScript, I also handle various <span className='color-pop'>tools</span> including Azure DevOps, Visual Studio, SQL Server, and GitHub with comfort.
      </p>

      <div>
        <SvgIcon icon={SvgIconType.LinkedIn} />
      </div>
    </div>
  )
}

export default Bio