/* eslint-disable react/prop-types */
const CATEGORIES_THUMB = "../../assets/categories-thumb/";
export default function MenuNavItem({ imgName, itemName, categoryRoute }) {
  return (
    <>
      <li>
        <a href={`/menu/${categoryRoute}`} data-value="appetizers-section">
          <img src={`${CATEGORIES_THUMB}${imgName}`} alt="categories-thumb" />
          {itemName}
        </a>
      </li>
    </>
  );
}
