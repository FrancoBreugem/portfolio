import { experience } from '../../../content/projects-content'
import Card from '../../card/card'
import './work-places.scss'

const WorkPlaces: React.FC = () => {

  return (
    <div className='work-places'>
      <div className='work-places-header'>
        <div className='work-places-header-line' />
        <h2 className='work-places-header-text'>
          Where I've Worked
        </h2>
        <div className='work-places-header-line' />
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

export default WorkPlaces