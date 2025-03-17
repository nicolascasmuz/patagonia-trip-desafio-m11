import { Footer } from "components/footer";
import { Header } from "components/header";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <div className={styles.div}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
