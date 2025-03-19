import styles from "./footer.module.css";
import Image from "next/image";
import logotipo from "../../resources/logo-patagonia-trip.png";
import facebook from "../../resources/facebook-icon.webp";
import instagram from "../../resources/instagram-icon.webp";
import twitter from "../../resources/twitter-icon.webp";

// MODO DE APLICAR CLASES A LAS ETIQUETAS:
// className={styles["nombre-de-la-clase"]}

/*  LAS IMÁGENES SE IMPORTAN CON LA ETIQUETA IMAGE DE LA SIGUIENTE FORMA:

<Image
    className={styles["nombre-de-la-clase"]}
    src={pictureFile}
    alt="picture-file"
/>

*/

/* SINTAXIS DE COMPONENTE EN NEXTJS:

export default function Component() {
  return (
    <>
      Hello world!
    </>
  );
}

*/

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
