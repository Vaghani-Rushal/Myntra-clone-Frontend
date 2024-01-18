import React from "react";
import style from "./CSS-Modules/Shop.module.css";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { bagAction } from "../store/bag";

export default function BagItems({ item }) {
  const dispatch = useDispatch();

  const handleRemoveBagItem = (itemId) => {
    dispatch(bagAction.removeItem({ itemId: itemId }));
  };

  return (
    <>
      <div key={item.id} className={`${style["bag-item-container"]} mb-3`}>
        <div className={style["item-left-part"]}>
          <img className={style["bag-item-img"]} src={item.image} />
        </div>
        <div className={style["item-right-part"]}>
          <div className={style["company"]}>{item.company}</div>
          <div className={style["item-name"]}>{item.item_name}</div>
          <div className={style["price-container"]}>
            <span className={style["current-price"]}>
              Rs {item.current_price}
            </span>
            <span className={style["original-price"]}>
              Rs {item.original_price}
            </span>
            <span className={style["discount-percentage"]}>
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className={style["return-period"]}>
            <span className={style["return-period-days"]}>
              {item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className={style["delivery-details"]}>
            Delivery by
            <span className={style["delivery-details-days"]}>
              {item.delivery_date}
            </span>
          </div>
        </div>

        <div
          className={style["remove-from-cart"]}
          onClick={() => handleRemoveBagItem(item.id)}
        >
          <RiDeleteBin5Fill />
        </div>
      </div>
    </>
  );
}
