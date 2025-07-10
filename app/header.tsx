import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;