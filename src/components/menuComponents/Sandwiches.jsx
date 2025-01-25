/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { sandwiches } from "../../data/menuCategories";
export default function Sandwiches({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/sandwiches/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.sandwichehsTitle}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {sandwiches.map((sandwich, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${sandwich.img}`}
                    imgAlt={sandwich.title}
                    itemName={sandwich.title}
                    itemDesription={sandwich.description}
                    price={sandwich.price}
                    cal={sandwich.calories}
                  ></Category>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
