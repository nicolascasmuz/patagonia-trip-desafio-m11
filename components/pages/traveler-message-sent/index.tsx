import styles from "./traveler-message-sent.module.css";
import Layout from "components/layout";
import { useRouter } from "next/router";

export default function TravelerMessageSent() {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Layout theme={true}>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2>Muchas gracias</h2>
          <p>En breve nos estaremos contactando contigo.</p>
          <button onClick={HandleClick}>Volver</button>
        </div>
      </div>
    </Layout>
  );
}
