import React from "react";
import { useSelector } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";
import { RootState, useAppDispatch } from "../../store";
//Створюємо динамічний список
const categories = ["Всі", "Сети", "Роли", "Суші", "Вегетаріанські", "Гострі"];
const Categories: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector((state: RootState) => state.filter);
  const onClickCategory = React.useCallback(
    (index: number) => {
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
