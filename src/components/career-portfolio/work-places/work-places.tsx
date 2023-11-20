import { experience } from '../../../content/projects-content'
import { Experience } from '../../../interfaces/experience-type'
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
      
      <>
        {
          experience.map((item: Experience, index: number) => (
            <>
              { index !== 0 &&
                <div className='work-places-header-line' />
              }
              <Card key={index} experience={item} />
            </>
          ))
        }
      </>
    </div>
  )
}

export default WorkPlaces