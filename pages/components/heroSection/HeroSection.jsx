import styles from './HeroSection.module.scss';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className={styles.heroImgOverlay}>
      <Image
        className={styles.heroImg}
        src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtb3ZpZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
        alt='hero'
        width={1200}
        height={450}
      />
    </div>
  );
}
