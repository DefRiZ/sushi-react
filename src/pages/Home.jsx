import React from "react";

import Categories from "../components/Categories";
import SushiBLock from "../components/SushiBlock";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";
//REDUX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSushi } from "../store/slices/sushiSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.sushi);
  const { categoryId, sort } = useSelector((state) => state.filter);
  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortType = sort.sortProperty;

    dispatch(
      fetchSushi({
        category,
        sortType,
      })
    );
  }, [categoryId, sort.sortProperty]);

  const sushiList = items.map((item) => <SushiBLock key={item.id} {...item} />);
  const skeletonList = [...new Array(3)].map((_, i) => <Skeleton key={i} />);
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Усі суші</h2>
      <div className="content__items">
        {status === "error" && (
          <p>
            Не вдалося завантажити список ролів. Будь ласка, спробуйте ще раз
            через декілька хвилин.
          </p>
        )}
        {status === "loading" ? skeletonList : sushiList}
      </div>
    </div>
  );
};

export default Home;
