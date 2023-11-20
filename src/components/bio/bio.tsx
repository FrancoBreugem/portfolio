import './bio.scss';
import ContactMe from './contact-me/contact-me';
import Hobbies from './hobbies/hobbies';
import Introduction from './introduction/introduction';
import TechStack from './tech-stack/tech-stack';

const Bio: React.FC = () => {

  return (
    <div className='bio'>
      <Introduction />
      <ContactMe />
      <div className='tech-hobbies'>
        <TechStack />
        <Hobbies />
      </div>
    </div>
  )
}

export default Bio