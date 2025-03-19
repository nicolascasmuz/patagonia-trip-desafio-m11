import styles from "./footer.module.css";
import Image from "next/image";
import logotipo from "../../resources/logo-patagonia-trip.png";
import facebook from "../../resources/facebook-icon.webp";
import instagram from "../../resources/instagram-icon.webp";
import twitter from "../../resources/twitter-icon.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={logotipo}
        alt="Patagonia Trip Logo"
        className={styles["proyect-logo"]}
      />
      <ul className={styles["socials"]}>
        <li>
          <a href="#" target="_blank">
            <Image
              src={instagram}
              alt="Patagonia Trip Logo"
              className={styles["proyect-logo"]}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src={twitter}
              alt="Patagonia Trip Logo"
              className={styles["proyect-logo"]}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src={facebook}
              alt="Patagonia Trip Logo"
              className={styles["proyect-logo"]}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
