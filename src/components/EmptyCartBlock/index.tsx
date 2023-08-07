import React from "react";
import empty from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик пустий <span>😕</span>
      </h2>
      <p>
        У вашій корзині ще немаю ролів.
        <br />
        Щоб зробити замовлення - перейдіть на головну сторінку.
      </p>
      <img src={empty} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутись назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
