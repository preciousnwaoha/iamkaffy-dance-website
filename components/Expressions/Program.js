import Image from "next/image";
import React from "react";
import classes from "./Program.module.css";

const Program = ({ name, imgPath, imgw, imgh, description }) => {
  return (
    <div className={classes.program}>
      <div className={classes["program-image-wrapper"]}>
      <div className={classes["program-image-wrapper-inner"]}>
        <Image
          src={imgPath}
          alt={`Kaffy the dancer's ${name} program`}
          width={imgw}
          height={imgh}
          layout="responsive"
        />
        {/* <p className={classes["program-image-ref"]}>{topRef}</p> */}
        
      </div>
      </div>
      
      <div className={classes["program-text-wrapper"]}>
          <p className={classes["program-name"]}>{name}</p>
          <p className={classes["program-description"]}>{description}</p>
        </div>
    </div>
  );
};

export default Program;
