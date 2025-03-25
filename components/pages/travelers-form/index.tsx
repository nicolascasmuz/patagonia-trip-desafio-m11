import Layout from "components/layout";
import styles from "./travelers-form.module.css";
import { useRouter } from "next/router";
import { CreateTraveler } from "lib/api";

export default function TravelersForm() {
  const router = useRouter();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name: e.target.name.value,
      email: e.target.email.value,
      vehicle: e.target.vehicle.value,
    };

    try {
      CreateTraveler(newData);
      router.push("/traveler-message-sent");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <Layout theme={true}>
      <section className={styles["travelers-form"] + " section"}>
        <div className="container">
          <h2>Disfruta de tu viaje sin preocupaciones</h2>
          <div className={styles["travelers-grid"]}>
            <div className="column-form">
              <form onSubmit={HandleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle">Vehículo:</label>
                  <input type="text" id="vehicle" name="vehicle" required />
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
    </Layout>
  );
}
