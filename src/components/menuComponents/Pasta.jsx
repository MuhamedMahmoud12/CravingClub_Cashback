/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { pastas } from "../../data/menuCategories";
export default function Pasta({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/pasta/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.pastasTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {pastas.map((pasta, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${pasta.img}`}
                    imgAlt={pasta.title}
                    itemName={pasta.title}
                    itemDesription={pasta.description}
                    price={pasta.price}
                    cal={pasta.calories}
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
