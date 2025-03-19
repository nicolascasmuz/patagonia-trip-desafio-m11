import Image from "next/image";
import styles from "./features.module.css";
import place1 from "../../resources/foto-01.webp";
import place2 from "../../resources/foto-02.webp";
import place3 from "../../resources/foto-03.webp";
import place4 from "../../resources/foto-04.webp";
import place5 from "../../resources/foto-05.webp";

export default function FeaturedPlaces() {
  return (
    <section className={styles["featured-places"]}>
      <div className="container">
        <h2>Lugares destacados</h2>
        <div className={styles["grid-container"]}>
          <Image
            className={styles.big}
            src={place1}
            alt="Lugar destacado de la patagonia"
          />
          <div className={styles["small-grid"]}>
            <Image src={place2} alt="Lugar destacado de la patagonia" />
            <Image src={place3} alt="Lugar destacado de la patagonia" />
            <Image src={place4} alt="Lugar destacado de la patagonia" />
            <Image src={place5} alt="Lugar destacado de la patagonia" />
          </div>
        </div>
      </div>
    </section>
  );
}
