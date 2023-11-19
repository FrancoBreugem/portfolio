import Bio from '../components/bio/bio';
import Experience from '../components/experience/experience';
import './home.scss';

const Home: React.FC = () => {

  return (
    <div className='home-container'>
      <Bio />
      <Experience />
    </div>
  )
}

export default Home