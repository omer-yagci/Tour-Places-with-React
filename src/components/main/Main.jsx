import React from "react";
import classes from "../../scss/main.module.scss";
import { data } from "../../helper/data";
import Card from "../cards/Card";

const Main = () => {
  return (
    <div className={classes["card-container"]}>
      {data.map((element, index) => {
        const { title, image, desc, id } = element;
        return <Card title={title} image={image} desc={desc} key={id} />;
      })}
    </div>
  );
};

export default Main;
