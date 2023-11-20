import { Experience } from '../../interfaces/experience-type'
import Chip from '../chip/chip'
import './card.scss'

type CardProps = {
  experience: Experience
}

const Card: React.FC<CardProps> = ({ experience }) => {

  return (
    <div className='card'>
      <h2>
        {experience.projectName}
      </h2>

      <h3>
        {experience.dateRange}
      </h3>

      <h3>
        Project Summary:
      </h3>

      <p>
        {experience.projectSummary}
      </p>

      <h3>
        My Role:
      </h3>

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