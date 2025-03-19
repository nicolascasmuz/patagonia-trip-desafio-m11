import styles from "./owners-form.module.css";

export default function OwnersForm() {
  return (
    <section className={styles["owners-form"] + " section"}>
      <div className="container">
        <h2>Hacete conocido para todos</h2>
        <div className={styles["owners-grid"]}>
          <div className="column-form">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Tipo de establecimiento:</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Servicios:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Ubicacion:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="column-content">
            <p>
              Eres dueño de un establecimiento? Hospedaje, camping, parador,
              restaurante en la ruta...
            </p>
            <p>Puedes inscribirte aquí para promocionar tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
