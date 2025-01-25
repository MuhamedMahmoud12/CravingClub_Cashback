/* eslint-disable react/prop-types */
import menuCategories from "../../styles/HomeStyles/menuCategories.module.css";
const CATEGORIES_THUMB = "../../assets/categories-thumb-png/";
export default function MenuItem({ img, itemName, forward }) {
  return (
    <div className={menuCategories["item"]}>
      <a href={`/menu/${forward}`}>
        <div className={menuCategories["img"]}>
          <img src={`${CATEGORIES_THUMB}${img}`} alt="Appetizers-thumb" />
        </div>
        <div className={menuCategories.text}>
          <h3>{itemName}</h3>
        </div>
      </a>
    </div>
  );
}
