import React from "react";
import styles from "./image.module.scss";
import Image from "next/image";

export default function NextImage({path}) {
  return (
    <div className={styles["image-container"]}>
      <Image src={path} layout="fill" className={styles["image"]} />
    </div>
  );
}
