import Footer from "components/footer";
import Header from "components/header";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <div className={styles.div}>
      <div className="container">
        <Header />
      </div>
      <div className="container">{children}</div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
