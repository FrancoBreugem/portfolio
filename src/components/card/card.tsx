import { Experience } from '../../interfaces/experience-type'
import Chip from '../chip/chip'
import './card.scss'

type CardProps = {
  experience: Experience
}

const Card: React.FC<CardProps> = ({ experience }) => {

  return (
    <div className='card'>
      <h3 className='card-title'>
        <span className='color-pop'>
          {experience.projectName}
        </span>
      </h3>

      <h4>
        {experience.dateRange}
      </h4>

      <p>
        {experience.projectSummary}
      </p>

      <p>
        {experience.myRole}
      </p>

      <div className='card-chips'>
        {experience.tags.map((item, index) => (
          <Chip key={index} text={item}  />
        ))}
      </div>
    </div>
  )
}

export default Card