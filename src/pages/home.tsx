import Bio from '../components/bio/bio';
import CareerPortfolio from '../components/career-portfolio/career-portfolio';
import './home.scss';

const Home: React.FC = () => {

  return (
    <div className='home-container'>
      <Bio />
      <CareerPortfolio />
    </div>
  )
}

export default Home