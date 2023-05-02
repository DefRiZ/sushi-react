import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SushiBLock from "./components/SushiBlock";
import Sort from "./components/Sort";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://6450e98be1f6f1bb22a255dc.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const sushiList = items.map((item) => <SushiBLock key={item.id} {...item} />);

  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Усі суші</h2>
            <div class="content__items">{sushiList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
