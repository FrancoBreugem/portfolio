import styles from './card.module.css';

function Card() {

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        Card Title
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque est, condimentum mattis justo vitae, dapibus viverra magna. Donec blandit dolor a ullamcorper gravida. Phasellus gravida ut lectus nec pharetra. Praesent efficitur tellus sit amet efficitur cursus. Praesent tellus tellus, placerat eu pretium eget, pretium cursus eros. Aenean at tempor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque est, condimentum mattis justo vitae, dapibus viverra magna. Donec blandit dolor a ullamcorper gravida. Phasellus gravida ut lectus nec pharetra. Praesent efficitur tellus sit amet efficitur cursus. Praesent tellus tellus, placerat eu pretium eget, pretium cursus eros. Aenean at tempor.
      </p>
    </div>
  )
}

export default Card