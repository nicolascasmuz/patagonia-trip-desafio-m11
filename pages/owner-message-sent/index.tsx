import styles from "./owner-message-sent.module.css";
import Layout from "components/layout";
import { useRouter } from "next/router";

export default function OwnerMessageSent() {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Layout theme={false}>
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
