import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import FaIcon from '../../fa-icon/fa-icon';
import './tech-stack.scss';

const TechStack: React.FC = () => {

  return (
    <div>
      <FaIcon icon={faReact} text='React TypeScript' />
      <FaIcon icon={faAngular} text='Angular' />
      <FaIcon icon={faServer} text='C#' />
      <FaIcon icon={faDatabase} text='SQL' />
    </div>
  )
}

export default TechStack