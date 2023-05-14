import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./SingleSushi.module.scss";

import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const SingleSushi = () => {
  const dispatch = useDispatch();
  const [sushi, setSushi] = React.useState({
    id: "0",
    imageUrl: "",
    title: "Завантаження",
    quantity: 0,
    weight: 0,
    price: 0,
    category: 0,
    rating: 0,
    description: "",
  });
  const { id } = useParams();
  const { imageUrl, title, price, quantity, weight, description } = sushi;
  const addSushi = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
      quantity,
      weight,
    };
    dispatch(addItem(item));
  };
  React.useEffect(() => {
    async function sushiFetch() {
      try {
        const { data } = await axios.get(
          "https://6450e98be1f6f1bb22a255dc.mockapi.io/items/" + id
        );
        setSushi(data);
      } catch (error) {
        alert("Error");
      }
    }
    sushiFetch();
  }, []);

  return (
    <div className={styles.root}>
      <div>
        <img src={imageUrl} alt="Суші" />
      </div>
      <div className={styles.about}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>Інгрідієнти</h3>
        <p className={styles.description}>{description}</p>
        <button onClick={() => addSushi()} className="button">
          Додати в корзину
        </button>
        <div className={styles.button}>
          <Link to="/">
            <button className="button">Повернутись на головну</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSushi;
