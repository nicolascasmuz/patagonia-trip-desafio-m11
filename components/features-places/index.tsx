import React, { useState, useEffect } from "react";
import styles from "./features.module.css";
import { getOwners } from "lib/api";

export default function FeaturedPlaces() {
  const [bestOwners, setBestOwners] = useState(null);
  const [loaded, setLoaded] = useState(false);

  async function pullOwners() {
    const res = await getOwners();
    setBestOwners(res);
    setLoaded(true);
  }

  useEffect(() => {
    pullOwners();
    console.log("bestOwners: ", bestOwners);
  }, [loaded]);

  if (loaded) {
    return (
      <section className={styles["featured-places"]}>
        <div className="container">
          <h2>Lugares destacados</h2>
          <div className={styles["grid-container"]}>
            <div className={styles.big}>
              <img
                className={styles["place-picture"]}
                src={bestOwners[0]?.picURL}
                alt="Lugar destacado de la patagonia"
              />
              <h2 className={styles["text-overlay"]}>
                {bestOwners[0]?.business}
              </h2>
            </div>
            <div className={styles["small-grid"]}>
              <div className={styles.small}>
                <img
                  className={styles["place-picture"]}
                  src={bestOwners[1]?.picURL}
                  alt="Lugar destacado de la patagonia"
                />
                <h2 className={styles["text-overlay"]}>
                  {bestOwners[1]?.business}
                </h2>
              </div>
              <div className={styles.small}>
                <img
                  className={styles["place-picture"]}
                  src={bestOwners[2]?.picURL}
                  alt="Lugar destacado de la patagonia"
                />
                <h2 className={styles["text-overlay"]}>
                  {bestOwners[2]?.business}
                </h2>
              </div>
              <div className={styles.small}>
                <img
                  className={styles["place-picture"]}
                  src={bestOwners[3]?.picURL}
                  alt="Lugar destacado de la patagonia"
                />
                <h2 className={styles["text-overlay"]}>
                  {bestOwners[3]?.business}
                </h2>
              </div>
              <div className={styles.small}>
                <img
                  className={styles["place-picture"]}
                  src={bestOwners[4]?.picURL}
                  alt="Lugar destacado de la patagonia"
                />
                <h2 className={styles["text-overlay"]}>
                  {bestOwners[4]?.business}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    null;
  }
}
