import Bio from '../components/bio/bio';
import Card from '../components/card/card';
import { experience } from '../content/experience';
import './home.scss'

const Home: React.FC = () => {

  return (
    <div className='home-container'>
      <Bio />

      <div className='card-section'>
        {experience.map((item, index) => (
          <Card key={index} experience={item} />
        ))}
      </div>
    </div>
  )
}

export default Home