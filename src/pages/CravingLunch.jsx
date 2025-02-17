import lunchStyles from "../styles/LunchStyles/cravingLunch.module.css";
const dishes = [
  "../../assets/craving-lunch/main-49-1.png",
  "../../assets/craving-lunch/salad-1.png",
  "../../assets/craving-lunch/drink-1.png",
];
export default function CravingLunch() {
  return (
    <div className={lunchStyles["container-div"]}>
      <div className={lunchStyles["inner-div"]}>
        <div className={lunchStyles["text-container"]}>
          <h1>Craving Lunch</h1>
        </div>
        <p>Main Course + soup or salad + drink</p>
        <div className={`${lunchStyles["img"]} ${lunchStyles["left-img"]}`}>
          <img src={dishes[0]} alt="dish-1" />
        </div>
        <div className={`${lunchStyles["img"]} ${lunchStyles["top-img"]}`}>
          <img src={dishes[1]} alt="dish-1" />
        </div>
        <div className={`${lunchStyles["img"]} ${lunchStyles["right-img"]}`}>
          <img src={dishes[2]} alt="dish-1" />
        </div>
      </div>
    </div>
  );
}
