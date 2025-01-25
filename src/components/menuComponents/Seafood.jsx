/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { seafoods } from "../../data/menuCategories";
export default function Seafood({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/Seafood/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.seafoodTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {seafoods.map((seafood, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${seafood.img}`}
                    imgAlt={seafood.title}
                    itemName={seafood.title}
                    itemDesription={seafood.description}
                    price={seafood.price}
                    cal={seafood.calories}
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
