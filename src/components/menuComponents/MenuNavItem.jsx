/* eslint-disable react/prop-types */
const CATEGORIES_THUMB = "../../assets/categories-thumb/";
import { useNavigate } from "react-router-dom";
export default function MenuNavItem({ imgName, itemName, categoryRoute }) {
  const navigator = useNavigate();
  return (
    <>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigator(`/menu/${categoryRoute}`);
          }}
          data-value="appetizers-section"
        >
          <img src={`${CATEGORIES_THUMB}${imgName}`} alt="categories-thumb" />
          {itemName}
        </a>
      </li>
    </>
  );
}
