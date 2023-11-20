import { experience } from '../../../content/projects-content'
import { Experience } from '../../../interfaces/experience-type'
import Card from '../../card/card'
import './experience.scss'

const Experience: React.FC = () => {

  return (
    <div className='experience'>
      <div className='experience-header'>
        <div className='experience-header-line' />
        <h2 className='experience-header-text'>
          <span className='color-pop'>Projects</span>
        </h2>
        <div className='experience-header-line' />
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

export default Experience