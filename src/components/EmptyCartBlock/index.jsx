import React from "react";
import empty from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Кошик пустий <icon>😕</icon>
      </h2>
      <p>
        У вашій корзині ще немаю ролів.
        <br />
        Щоб зробити замовлення - перейдіть на головну сторінку.
      </p>
      <img src={empty} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Повернутись назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
