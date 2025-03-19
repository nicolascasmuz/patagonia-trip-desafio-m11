import styles from "./travelers-form.module.css";

export default function TravelersForm() {
  return (
    <section className={styles["travelers-form"] + " section"}>
      <div className="container">
        <h2>Disfruta de tu viaje sin preocupaciones</h2>
        <div className={styles["travelers-grid"]}>
          <div className="column-form">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="column-content">
            <p>Suscríbete para estar al tanto de las novedades.</p>
            <ul>
              <li>Nuevos alojamientos.</li>
              <li>Servicios.</li>
              <li>Habilitación de rutas.</li>
              <li>Inconvenientes para viajar.</li>
              <li>Actualizaciones en nuestra plataforma.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
