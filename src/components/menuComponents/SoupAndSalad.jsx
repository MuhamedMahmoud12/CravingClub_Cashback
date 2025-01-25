/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { soups_salads } from "../../data/menuCategories";
export default function SoupAndSalad({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/soup&salad/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.soupAndSaladTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {soups_salads.map((soup_salad, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${soup_salad.img}`}
                    imgAlt={soup_salad.title}
                    itemName={soup_salad.title}
                    itemDesription={soup_salad.description}
                    price={soup_salad.price}
                    cal={soup_salad.calories}
                  >
                    {soup_salad.addOns && (
                      <>
                        <p>{soup_salad.addOns[0].option1}</p>
                        <div className={categoryStyle["price-cal"]}>
                          <span className={categoryStyle.price}>
                            {soup_salad.addOns[0].price1}
                          </span>
                          <span className={categoryStyle.cal}>
                            {soup_salad.addOns[0].cal1}
                          </span>
                        </div>
                        <p>{soup_salad.addOns[0].option2}</p>
                        <div className={categoryStyle["price-cal"]}>
                          <span className={categoryStyle.price}>
                            {soup_salad.addOns[0].price2}
                          </span>
                          <span className={categoryStyle.cal}>
                            {soup_salad.addOns[0].cal2}
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
