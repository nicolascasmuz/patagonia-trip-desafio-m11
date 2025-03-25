import Footer from "components/footer";
import Header from "components/header";
import styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.div}>
      <div className="container">
        <Header theme={props.theme} />
      </div>
      <div>{props.children}</div>
      <div className="container">
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}
