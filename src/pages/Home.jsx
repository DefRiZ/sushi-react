import React from "react";

import Categories from "../components/Categories";
import SushiBLock from "../components/SushiBlock";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
//REDUX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSushi } from "../store/slices/sushiSlice";

import qs from "qs";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state) => state.sushi);
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );
  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortType = sort.sortProperty;
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchSushi({
        category,
        sortType,
        currentPage,
        search,
      })
    );
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, currentPage, searchValue, dispatch]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sort.sortProperty, currentPage, searchValue, dispatch]);

  const sushiList = items.map((item) => <SushiBLock key={item.id} {...item} />);
  const skeletonList = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
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
      <Pagination />
    </div>
  );
};

export default Home;
