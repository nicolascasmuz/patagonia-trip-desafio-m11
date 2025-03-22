import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./owners-form.module.css";
import { CreateOwner } from "lib/api";
import { Dropzone } from "dropzone";
import uploadPic from "resources/upload-pic.png";
import mapboxgl from "mapbox-gl";
import pinMap from "resources/pin-map.png";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function OwnersForm() {
  const [picFile, setPicFile] = useState(null);
  const [preview, setPreview] = useState(uploadPic);

  const addPetPicRef = useRef<HTMLImageElement | null>(null);
  const dropzoneRef = useRef<Dropzone | null>(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-67.6533669, -44.2252091],
        zoom: 3,
      });
    }

    if (addPetPicRef.current) {
      dropzoneRef.current = new Dropzone(addPetPicRef.current, {
        url: "/file/post",
        autoProcessQueue: false,
      });

      dropzoneRef.current.on("addedfile", (file) => {
        setPicFile(file);
        const blobURL: any = URL.createObjectURL(file);
        setPreview(blobURL);
        /* picFile = file;
        console.log("file: ", file);
         const blobURL: any = URL.createObjectURL(file);
        setPreview(blobURL);
         const reader = new FileReader();
        reader.onload = (e) => {
          if (addPetPicRef.current && e.target) {
            addPetPicRef.current.src = e.target.result as string;
          }
        };
        reader.readAsDataURL(file); */
      });
    }
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!mapRef.current) {
      console.error("El mapa no se ha inicializado correctamente");
      return;
    }

    const newData = {
      email: e.target.email.value,
      type: e.target.type.value,
      business: e.target.business.value,
      services: e.target.services.value,
      other: e.target.other.value,
      picURL: picFile ? picFile.dataURL : "",
      lat: mapRef.current.getCenter().lat,
      lng: mapRef.current.getCenter().lng,
    };

    console.log("newData: ", newData);

    CreateOwner(newData);
  };

  return (
    <section className={styles["owners-form"] + " section"}>
      <div className="container">
        <h2>Hacete conocido para todos</h2>
        <div className={styles["owners-grid"]}>
          <div className="column-form">
            <form onSubmit={HandleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="type">Tipo de establecimiento:</label>
                <select name="type" id="type" required>
                  <option value="">Elige una opción</option>
                  <option value="parador">Parador</option>
                  <option value="hospedaje">Hospedaje</option>
                  <option value="camping">Camping</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="mixto">Mixto</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="business">Nombre del establecimiento:</label>
                <input type="text" id="business" name="business" required />
              </div>
              <div className="form-group">
                <label htmlFor="services">Servicios:</label>
                <input type="text" id="services" name="services" required />
              </div>
              <div className="form-group">
                <label htmlFor="other">Otras características:</label>
                <input type="text" id="other" name="other" required />
              </div>
              <Image
                ref={addPetPicRef}
                className={styles["add-pet-pic"]}
                src={preview}
                alt="upload-picture"
                height={180}
                width={335}
              />
              <label>Ubicación:</label>
              <div className={styles["map-container"]}>
                <Image
                  className={styles["pin-map"]}
                  src={pinMap}
                  alt="test-map"
                />
                <div ref={mapContainerRef} className={styles["map"]}></div>
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
