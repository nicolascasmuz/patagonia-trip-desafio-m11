import Image from "next/image";
import styles from "./hero.module.css";
import misionImage from "../../resources/logo-and-map.webp";

export default function Hero() {
  return (
    <section className={styles["hero"]}>
      <div className={styles["column-overlay"]}>
        <div className="container">
          <h2>
            Vive la experiencia de <br />
            viajar de un modo diferente.
          </h2>
          <ul>
            <li>Encuentra las mejores rutas</li>
            <li>Hospedajes, paradores, campings y mucho más...</li>
            <li>Promociona tu negocio</li>
          </ul>
          <div className={styles["buttons"]}>
            <button>Viaja</button>
            <button>Promocionate</button>
          </div>
        </div>
      </div>
    </section>
  );
}
