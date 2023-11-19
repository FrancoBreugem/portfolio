import { experience } from '../../../content/projects-content'
import Card from '../../card/card'
import './experience.scss'

const Experience: React.FC = () => {

  return (
    <div className='experience'>
      <div className='experience-header'>
        <div className='experience-header-line' />
        <h2 className='experience-header-text'>
          Projects
        </h2>
        <div className='experience-header-line' />
      </div>
      
      <div>
        {
          experience.map((item, index) => (
            <Card key={index} experience={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Experience