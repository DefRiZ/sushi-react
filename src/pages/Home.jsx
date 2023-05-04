import React from "react";

import Categories from "../components/Categories";
import SushiBLock from "../components/SushiBlock";
import Sort from "../components/Sort";
//REDUX
import { useSelector } from "react-redux";
//Axios
import axios from "axios";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const { categoryId, sort } = useSelector((state) => state.filter);
  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    axios
      .get(
        `https://6450e98be1f6f1bb22a255dc.mockapi.io/items?${category}&sortBy=${sort.sortProperty}`
      )
      .then((response) => setItems(response.data));
  }, [categoryId, sort.sortProperty]);

  const sushiList = items.map((item) => <SushiBLock key={item.id} {...item} />);
  return (
    <div>
      <div class="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 class="content__title">Усі суші</h2>
      <div class="content__items">{sushiList}</div>
    </div>
  );
};

export default Home;
