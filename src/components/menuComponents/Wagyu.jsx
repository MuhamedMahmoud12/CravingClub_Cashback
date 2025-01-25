/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { wagyus } from "../../data/menuCategories";
export default function Wagyu({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/wagyu/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.wagyusTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {wagyus.map((wagyu, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${wagyu.img}`}
                    imgAlt={wagyu.title}
                    itemName={wagyu.title}
                    itemDesription={wagyu.description}
                    price={wagyu.price}
                    cal={wagyu.calories}
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
