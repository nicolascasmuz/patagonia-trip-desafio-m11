import React, { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import mapboxgl from "mapbox-gl";
import { getOwners } from "lib/api";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function Hero() {
  const [bestOwners, setBestOwners] = useState(null);
  const [loaded, setLoaded] = useState(false);

  async function pullOwners() {
    const res = await getOwners();
    setBestOwners(res);
    setLoaded(true);
  }

  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-78.6095319, -48.3630645],
        zoom: 4,
      });
    }

    if (bestOwners) {
      for (const owner of bestOwners) {
        const { lat, lng } = owner;

        const marker = new mapboxgl.Marker({ color: "#0abde3" })
          .setLngLat([lng, lat])
          .addTo(mapRef.current);

        marker.getElement().addEventListener("click", async (e) => {
          const { lng, lat } = marker._lngLat;

          const selectedPetOnMap = bestOwners.find((p) => {
            return p.lng == lng && p.lat == lat;
          });

          console.log("selectedPetOnMap: ", selectedPetOnMap);

          /* try {
            await selectMissingPet(selectedPetOnMap);
          } catch (error) {
            console.error(error);
          } */
        });
      }
    } else {
      null;
    }
  }, [loaded]);

  useEffect(() => {
    pullOwners();
  }, []);

  return (
    <section className={styles["hero"]}>
      <div className={styles["map-container"]}>
        <div ref={mapContainerRef} className={styles["map"]} />
      </div>
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
            <a href="/travelers-form">
              <button>Viaja</button>
            </a>
            <a href="/owners-form">
              <button>Promocionate</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
