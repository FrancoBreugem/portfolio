import { faBrain, faDumbbell, faGamepad, faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../fa-icon/fa-icon';
import './hobbies.scss';

const Hobbies: React.FC = () => {

  return (
    <div>
      <FaIcon icon={faPersonHiking} text='Hikes & Adventures' />
      <FaIcon icon={faGamepad} text='Games' />
      <FaIcon icon={faBrain} text='Mental Wellbeing' />
      <FaIcon icon={faDumbbell} text='Physical Wellbeing' />
    </div>
  )
}

export default Hobbies