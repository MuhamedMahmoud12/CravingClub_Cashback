/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { burgers } from "../../data/menuCategories";
export default function Burgers({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/burger/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.burgersTitle}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {burgers.map((burger, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${burger.img}`}
                    imgAlt={burger.title}
                    itemName={burger.title}
                    itemDesription={burger.description}
                    price={burger.price}
                    cal={burger.calories}
                  ></Category>
                </>
              );
            })}
            {/* <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
