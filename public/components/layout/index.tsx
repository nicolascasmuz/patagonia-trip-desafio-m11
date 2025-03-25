import Footer from "components/footer";
import Header from "components/header";
import styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.div}>
      <Header theme={props.theme} />
      <div>{props.children}</div>
      <Footer theme={props.theme} />
    </div>
  );
}
