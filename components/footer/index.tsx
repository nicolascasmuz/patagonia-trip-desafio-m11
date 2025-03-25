import styles from "./footer.module.css";
import Image from "next/image";
import logotipo from "../../resources/logo-patagonia-trip.png";
import facebook from "../../resources/facebook-icon.webp";
import instagram from "../../resources/instagram-icon.webp";
import twitter from "../../resources/twitter-icon.webp";

export default function Footer(props) {
  return (
    <footer
      className={styles.footer}
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
      <div className={styles["footer__text-container"]}>
        <p>© 2025 Patagonia Trip all rights reserved</p>
        <ul>
          Desarrolladores:
          <li>Nicolás Casmuz</li>
          <li>Lucas Frezzini</li>
        </ul>
      </div>
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
