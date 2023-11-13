import Bio from '../components/bio/bio';
import Card from '../components/card/card';
import styles from './home.module.css';

function Home() {

  return (
    <div className={styles.homeContainer}>
      <Bio />

      <div className={styles.cardSection}>
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  )
}

export default Home