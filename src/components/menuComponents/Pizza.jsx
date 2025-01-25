/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import { pizzas } from "../../data/menuCategories";
export default function Pizza({ categoryStyle }) {
  const IMG_PATH = "../../assets/menu/pizza/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.pizzasTitles}
        />
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {pizzas.map((pizza, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${pizza.img}`}
                    imgAlt={pizza.title}
                    itemName={pizza.title}
                    itemDesription={pizza.description}
                    price={pizza.price}
                    cal={pizza.calories}
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
