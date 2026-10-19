import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} WorldWise. All rights reserved.
      </p>
    </footer>
  );
}
