/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { appetizers } from "../../data/menuCategories";

export default function Appetizers({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/appetizers/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.appetizersTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {appetizers.map((appetizer, index) => {
              return (
                <Category
                  key={index}
                  imgPath={`${IMG_PATH}${appetizer.img}`}
                  imgAlt={appetizer.title}
                  itemName={appetizer.title}
                  itemDesription={appetizer.description}
                  price={appetizer.price}
                  cal={appetizer.calories}
                >
                  {appetizer.ingredients && (
                    <>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[0].ingredient1Name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[0].ingredient1des}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[0].ingredient2Name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[0].ingredient2des}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[0].ingredient3Name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[0].ingredient3des}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[0].ingredient4Name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[0].ingredient4des}
                      </p>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.itemDetails[0].price}
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.itemDetails[0].calories}
                        </span>
                      </div>
                    </>
                  )}
                  {appetizer.addOns && (
                    <>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.addOns[0].add1}
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.addOns[0].price1}
                        </span>
                      </div>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.addOns[0].add2}
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.addOns[0].price2}
                        </span>
                      </div>
                    </>
                  )}
                </Category>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
