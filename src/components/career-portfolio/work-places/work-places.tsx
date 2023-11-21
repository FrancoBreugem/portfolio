import { workPlaceExperienceContent } from '../../../content/work-place-experience-content'
import { WorkPlaceExperienceType } from '../../../interfaces/work-place-experience-type'
import WorkPlaceCard from './work-place-card/work-place-card'
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
          workPlaceExperienceContent.map((item: WorkPlaceExperienceType, index: number) => (
            <>
              { index !== 0 &&
                <div className='work-places-header-line' />
              }
              <WorkPlaceCard key={index} experience={item} />
            </>
          ))
        }
      </>
    </div>
  )
}

export default WorkPlaces