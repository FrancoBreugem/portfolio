import { WorkPlaceExperienceType } from '../../../../interfaces/work-place-experience-type'
import './work-place-card.scss'

type WorkPlaceCardProps = {
  experience: WorkPlaceExperienceType
}

const WorkPlaceCard: React.FC<WorkPlaceCardProps> = ({ experience }) => {

  return (
    <div className='card'>
      <h3>
        {experience.companyName} - {experience.jobTitle}
      </h3>

      <h4>
        {experience.dateRange}
      </h4>

      {experience.roles.map((role: string, index: number) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: role }} />
      ))}
    </div>
  )
}

export default WorkPlaceCard