import MenuItem from "./MenuItem";
export default function FoodCategory() {
  return (
    <>
      <MenuItem
        img="apetizers-img.png"
        itemName="Appetizer"
        forward="appetizers"
      />
      <MenuItem
        img="soup&salad.png"
        itemName="Soup&Salad"
        forward="soup-salad"
      />
      <MenuItem
        img="sandwiches.png"
        itemName="Sandwiches"
        forward="sandwiches"
      />
      <MenuItem img="burger.png" itemName="Burgers" forward="burgers" />
      <MenuItem img="pasta.png" itemName="Pasta" forward="pasta" />
      <MenuItem img="pizza.png" itemName="Pizza" forward="pizza" />
      <MenuItem
        img="steak&ribs.png"
        itemName="Steak&Ribs"
        forward="steak-ribs"
      />
      <MenuItem img="wagyu.png" itemName="Wagyu Choice" forward="wagyu" />
      <MenuItem img="seafood.png" itemName="Sea Food" forward="seafood" />
      <MenuItem img="chicken.png" itemName="Chicken" forward="chicken" />
      <MenuItem img="kids-meal.png" itemName="Kids Meals" forward="kids-meal" />
      <MenuItem img="dessert.png" itemName="Dessert" forward="dessert" />
    </>
  );
}
