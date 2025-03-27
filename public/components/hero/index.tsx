import React, { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import mapboxgl from "mapbox-gl";
import { getOwners } from "lib/api";
import "mapbox-gl/dist/mapbox-gl.css";
import Card from "components/card";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function Hero() {
  const [bestOwners, setBestOwners] = useState(null);
  const [owner, setOwner] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState(false);

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

    mapRef.current.scrollZoom.disable();
    mapRef.current.boxZoom.disable();
    mapRef.current.doubleClickZoom.disable();
    mapRef.current.touchZoomRotate.disable();
    mapRef.current.dragPan.disable();
    mapRef.current.dragRotate.disable();

    if (bestOwners) {
      for (const owner of bestOwners) {
        const { lat, lng } = owner;

        const marker = new mapboxgl.Marker({ color: "#0abde3" })
          .setLngLat([lng, lat])
          .addTo(mapRef.current);

        marker.getElement().addEventListener("click", async (e) => {
          const { lng, lat } = marker._lngLat;

          const selectedOwnerOnMap = bestOwners.find((p) => {
            return p.lng == lng && p.lat == lat;
          });

          console.log("selectedOwnerOnMap: ", selectedOwnerOnMap);
          setOwner(selectedOwnerOnMap);
          setDisplay(true);
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
      <div
        className={styles["map-container"]}
        style={{ display: display ? "none" : "block" }}
      >
        <div ref={mapContainerRef} className={styles["map"]} />
      </div>
      <div
        className={styles["column-overlay"]}
        style={{ display: display ? "none" : "center" }}
      >
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
      <Card
        display={{ display: display ? "block" : "none" }}
        picURL={owner?.picURL}
        business={owner?.business}
        type={owner?.type}
        services={owner?.services}
        other={owner?.other}
        email={owner?.email}
        lat={owner?.lat}
        lng={owner?.lng}
      />
    </section>
  );
}
