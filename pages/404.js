import Link from 'next/link';
import styles from "./404.module.scss"

export default function Custom404() {
  return (
    <div className={styles['wrapper']+ " container"}>
      <h4>404 - Page Not Found</h4>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" legacyBehavior>
        <a>Go back to home</a>
      </Link>
    </div>
  );
}







