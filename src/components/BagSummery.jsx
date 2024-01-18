import React from "react";
import style from "./CSS-Modules/Shop.module.css";

export default function BagSummery({ items }) {
  let totalItem = 0;
  let totalMRP = 0;
  let totalDiscount = 0;

  items.forEach((item) => {
    totalItem++;
    totalMRP += Number(item.original_price);
    totalDiscount += Number(item.original_price - item.current_price);
  });

  const finalPayment = totalMRP - totalDiscount + 99;

  return (
    <>
      <div className={style["bag-details-container"]}>
        <div className={style["price-header"]}>
          PRICE DETAILS (${totalItem} Items)
        </div>
        <div className={style["price-item"]}>
          <span className={style["price-item-tag"]}>Total MRP</span>
          <span className={style["price-item-value"]}>₹${totalMRP}</span>
        </div>
        <div className={style["price-item"]}>
          <span className={style["price-item-tag"]}>Discount on MRP</span>
          <span
            className={`${style["price-item-value"]} ${style["priceDetail-base-discount"]}`}
          >
            -₹${totalDiscount}
          </span>
        </div>
        <div className={style["price-item"]}>
          <span className={style["price-item-tag"]}>Convenience Fee</span>
          <span className={style["price-item-value"]}>₹99</span>
        </div>
        <hr />
        <div className={style["price-footer"]}>
          <span className={style["price-item-tag"]}>Total Amount</span>
          <span className={style["price-item-value"]}>₹${finalPayment}</span>
        </div>
      </div>
      <button className={style["btn-place-order"]}>
        <div className={style["css-xjhrni"]}>PLACE ORDER</div>
      </button>
    </>
  );
}
