import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fa-icon.scss';

type FaIconProps = {
  icon: IconDefinition;
  text?: string;
  size?: SizeProp;
}

const FaIcon: React.FC<FaIconProps> = ({ icon, text = '', size = 'lg' }) => {

  return (
    <div className='fa-icon'>
      <FontAwesomeIcon icon={icon} size={size} />
      <p>
        {text}
      </p>
    </div>
  )
}

export default FaIcon