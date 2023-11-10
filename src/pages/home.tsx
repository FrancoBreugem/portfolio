import styles from './home.module.css';

function Home() {

  return (
    <>
      <section>
        <div className={styles.titleSection}>
           <h1>New Arrivals</h1>
        </div>

        <div className={styles.contentSections}>
          <div className={styles.contentSection}>Card</div>
          <div className={styles.contentSection}>Card</div>
          <div className={styles.contentSection}>Card</div>
          <div className={styles.contentSection}>Card</div>
        </div>
      </section>
    </>
  )
}

export default Home