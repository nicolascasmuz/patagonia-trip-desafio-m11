import Image from "next/image";
import styles from "./header.module.css";
import logotipo from "../../resources/logo-patagonia-trip.png";

export default function Header(props) {
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: props.theme
          ? "var(--foreground)"
          : "var(--background)",
        color: props.theme ? "var(--background)" : "var(--foreground)",
      }}
    >
      <Image
        src={logotipo}
        alt="Patagonia Trip Logo"
        className={styles["proyect-logo"]}
      />
      <h1 className={styles["proyect-name"]}>Patagonia Trip</h1>
    </header>
  );
}
