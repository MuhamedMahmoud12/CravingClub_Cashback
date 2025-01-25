import menuCategories from "../../styles/HomeStyles/menuCategories.module.css";
import FoodCategory from "./FoodCategory";
import DrinksCategory from "./DrinksCategory";
import { useState } from "react";
export default function MenuCategories() {
  const [toggleCategories, setToggleCategories] = useState(true);
  function showFoodCat() {
    setToggleCategories(true);
  }
  function showDrinksCat() {
    setToggleCategories(false);
  }
  return (
    <div className="container">
      <span className="prev-title">Our Menu</span>
      <h2 className={menuCategories["title"]}>Check Our Categories</h2>
      <ul className={menuCategories["categories-list"]}>
        <li
          onClick={showFoodCat}
          className={toggleCategories ? menuCategories["active"] : ""}
        >
          Food
        </li>
        <li
          onClick={showDrinksCat}
          className={!toggleCategories ? menuCategories["active"] : ""}
        >
          Drinks
        </li>
      </ul>
      <div className={`${menuCategories["category"]} `}>
        {toggleCategories && <FoodCategory />}
        {!toggleCategories && <DrinksCategory />}
      </div>
    </div>
  );
}
