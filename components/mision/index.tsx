import Image from "next/image";
import styles from "./mision.module.css";
import misionImage from "../../resources/logo-and-map.webp";

export default function Mision() {
  return (
    <section className={styles["mision"]}>
      <div className={styles["double-grid"] + " container"}>
        <div className={styles.column1}>
          <Image src={misionImage} alt="Logo y mapa de la Patagonia" />
        </div>
        <div className={styles.column2}>
          <h2>Misión</h2>
          <p>
            Ofrecer a los viajeros que se atrevan a recorrer la Patagonia una
            experiencia más segura para que puedan vivir una aventura sin las
            preocupaciones y los contratiempos que una región tan vasta e
            inhospita es capaz de ocasionar.
          </p>
          <p>
            También promovemos el desarrollo y la proli- feración de comercios y
            demás estableci- mientos de este territorio para fomentar su
            crecimiento económico.
          </p>
        </div>
      </div>
    </section>
  );
}
