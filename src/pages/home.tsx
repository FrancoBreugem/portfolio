import Bio from '../components/bio/bio';
import Card from '../components/card/card';
import './home.scss'

const Home: React.FC = () => {

  return (
    <div className='home-container'>
      <Bio />

      <div className='card-section'>
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  )
}

export default Home