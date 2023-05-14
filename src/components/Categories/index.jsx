import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";
//Створюємо динамічний список
const categories = ["Всі", "Сети", "Роли", "Суші", "Вегетаріанські", "Гострі"];
const Categories = React.memo(() => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);
  const onClickCategory = React.useCallback(
    (index) => {
      dispatch(setCategoryId(index));
    },
    [dispatch]
  );

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            className={categoryId === index ? "active" : ""}
            key={index}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
