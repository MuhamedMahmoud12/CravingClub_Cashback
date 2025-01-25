/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { kids_meals } from "../../data/menuCategories";
export default function KidsMeal({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/kids-meal/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.kidsMealsTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {kids_meals.map((kids_meal, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${kids_meal.img}`}
                    imgAlt={kids_meal.title}
                    itemName={kids_meal.title}
                    itemDesription={kids_meal.description}
                    price={kids_meal.price}
                    cal={kids_meal.calories}
                  >
                    {kids_meal.pasta && (
                      <>
                        <div
                          className={`${categoryStyle["price-cal"]} ${categoryStyle["addOne-container"]}`}
                        >
                          <span
                            className={`${categoryStyle.price} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.pasta[0]}
                          </span>
                          <span
                            className={`${categoryStyle.cal} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.pasta[1]}
                          </span>
                        </div>
                      </>
                    )}
                    {kids_meal.protien && (
                      <>
                        <div
                          className={`${categoryStyle["price-cal"]} ${categoryStyle["addOne-container"]}`}
                        >
                          <span
                            className={`${categoryStyle.price} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.protien[0]}
                          </span>
                          <span
                            className={`${categoryStyle.cal} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.protien[1]}
                          </span>
                        </div>
                      </>
                    )}
                  </Category>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
