import styles from './header.module.css';
import Image from 'next/image';
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;