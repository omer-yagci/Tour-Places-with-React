import classes from "../../scss/card.module.scss";

const Card = (data) => {
  const { title, image, desc } = data;
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <img src={image} alt={title} />

      <div className={classes["card-over"]}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
