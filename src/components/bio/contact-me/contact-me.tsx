import { SvgIconEnum } from '../../../enums/svg-icon-enum';
import SvgIcon from '../../svg-icon/svg-icon';
import './contact-me.scss';

const ContactMe: React.FC = () => {

  return (
    <div className='contact-me'>
      <SvgIcon 
        icon={SvgIconEnum.LinkedIn} 
        url='https://www.linkedin.com/in/franco-breugem-3b4533184/' 
      />

      <SvgIcon 
        icon={SvgIconEnum.GitHub} 
        url='https://github.com/FrancoBreugem' 
      />
    </div>
  )
}

export default ContactMe