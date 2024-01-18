import style from "./CSS-Modules/Shop.module.css";
import { bagAction } from "../store/bag";
import { useSelector, useDispatch } from "react-redux";

export default function ShopItem({ item }) {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const itemFound = bag.includes(item.id);

  const handleAddItemToBag = (event, itemId) => {
    if (!itemFound) {
      dispatch(bagAction.addItem({ itemId: itemId }));
    } else {
      dispatch(bagAction.removeItem({ itemId: itemId }));
    }
  };

  return (
    <>
      <div key={item.id} className={style.itemContainer}>
        <img src={item.image} alt="item image" style={{ width: "100%" }} />
        <div className={style.rating}>
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className={style.companyName}>{item.company}</div>
        <div className={style["item-name"]}>{item.item_name}</div>
        <div className={style.price}>
          <span className={style["current-price"]}>
            Rs {item.current_price}
          </span>
          <span className={style["original-price"]}>
            Rs {item.original_price}
          </span>
          <span className={style.discount}>
            ({item.discount_percentage}% OFF)
          </span>
        </div>

        <button
          className={`btn btn-add-bag ${style["btn-add-bag"]} ${
            itemFound ? "btn-danger" : "btn-success"
          }`}
          onClick={(event) => handleAddItemToBag(event, item.id)}
        >
          {itemFound ? "Remove From Bag" : "Add To Bag"}
        </button>
      </div>
    </>
  );
}
