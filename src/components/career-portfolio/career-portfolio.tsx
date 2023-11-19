import Experience from './experience/experience';
import WorkPlaces from './work-places/work-places';
import './career-portfolio.scss';

const CareerPortfolio: React.FC = () => {

  return (
    <div>
      <WorkPlaces />
      <Experience />
    </div>
  )
}

export default CareerPortfolio