import Image from "next/image";
import styles from "./header.module.css";
import logotipo from "../../resources/logo-patagonia-trip.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={logotipo}
        alt="Patagonia Trip Logo"
        className={styles["proyect-logo"]}
      />
      <h1 className={styles["proyect-name"]}>Patagonia Trip</h1>
    </header>
  );
}
