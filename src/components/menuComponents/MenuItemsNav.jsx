import menuItemsNav from "../../styles/menuStyles/menuItemsNav.module.css";
import MenuNavItem from "./MenuNavItem";
export default function MenuItemsNav() {
  return (
    <>
      <div className={menuItemsNav["menu-ul-padding-div"]}>
        <div className="container" id="menu-div">
          <ul className={menuItemsNav["menu-ul"]} id="fixed-menu">
            <MenuNavItem
              imgName="appetizers.webp"
              itemName="Appetizers"
              categoryRoute="appetizers"
            />
            <MenuNavItem
              imgName="soup&salad.jpg"
              itemName="Soup&Salad"
              categoryRoute="soup-salad"
            />
            <MenuNavItem
              imgName="sandwiches.jpg"
              itemName="Sandwiches"
              categoryRoute="sandwiches"
            />
            <MenuNavItem
              imgName="burgers.jpg"
              itemName="Burgers"
              categoryRoute="burgers"
            />
            <MenuNavItem
              imgName="pasta.jpg"
              itemName="Pasta"
              categoryRoute="pasta"
            />
            <MenuNavItem
              imgName="pizza.jpg"
              itemName="Pizza"
              categoryRoute="pizza"
            />
            <MenuNavItem
              imgName="steak&ribs.jpg"
              itemName="Steak&Ribs"
              categoryRoute="steak-ribs"
            />
            <MenuNavItem
              imgName="wagyu.jpg"
              itemName="Wagyu Choice"
              categoryRoute="wagyu"
            />
            <MenuNavItem
              imgName="seafood.jpg"
              itemName="SeaFood"
              categoryRoute="seafood"
            />
            <MenuNavItem
              imgName="chicken.jpg"
              itemName="Chicken"
              categoryRoute="chicken"
            />
            <MenuNavItem
              imgName="kids-meal.jpg"
              itemName="Kids Meals"
              categoryRoute="kids-meal"
            />
            <MenuNavItem
              imgName="dessert.jpg"
              itemName="Dessert"
              categoryRoute="dessert"
            />
          </ul>
        </div>
      </div>
    </>
  );
}
