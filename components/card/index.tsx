import React, { useState, useEffect, useRef } from "react";
import styles from "./card.module.css";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { getOwners } from "lib/api";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function Card(props) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && props.lat && props.lng) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [props.lng - 0.1, props.lat],
        zoom: 11,
      });

      mapRef.current.scrollZoom.disable();
      mapRef.current.boxZoom.disable();
      mapRef.current.doubleClickZoom.disable();
      mapRef.current.touchZoomRotate.disable();
      mapRef.current.dragPan.disable();
      mapRef.current.dragRotate.disable();

      new mapboxgl.Marker({ color: "#0abde3" })
        .setLngLat([props.lng, props.lat])
        .addTo(mapRef.current);
    }
  }, [props.lat, props.lat]);

  return (
    <section className={styles["card"]} style={props.display}>
      <div className={styles["map-container"]}>
        <div ref={mapContainerRef} className={styles["map"]} />
      </div>
      <div className={styles["column-overlay"]}>
        <div className="container">
          <div className={styles["business-pic-container"]}>
            <img
              src={props.picURL}
              alt="business-pic"
              className={styles["business-pic"]}
            />
          </div>
          <h2>{props.business}</h2>
          <ul>
            <li>Tipo de establecimiento: {props.type}</li>
            <li>Servicios: {props.services}</li>
            <li>Detalles: {props.other}</li>
            <li>Contacto: {props.email}</li>
          </ul>
          <div className={styles["buttons"]}>
            <a href="/">
              <button>Volver</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
