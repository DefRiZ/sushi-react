import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SushiBLock from "./components/SushiBlock";
import Sort from "./components/Sort";

function App() {
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
            <div class="content__items">
              <SushiBLock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
