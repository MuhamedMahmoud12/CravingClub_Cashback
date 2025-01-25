/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { chickens } from "../../data/menuCategories";
export default function Chicken({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/Chicken/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.chicken}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {chickens.map((chicken, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${chicken.img}`}
                    imgAlt={chicken.title}
                    itemName={chicken.title}
                    itemDesription={chicken.description}
                    price={chicken.price}
                    cal={chicken.calories}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
