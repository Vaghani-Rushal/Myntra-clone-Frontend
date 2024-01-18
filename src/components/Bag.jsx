import React from "react";
import BagItems from "./BagItems";
import style from "./CSS-Modules/Shop.module.css";
import BagSummery from "./BagSummery";
import { useSelector } from "react-redux";
import EmptyBag from "./EmptyBag";

export default function Bag() {
  const items = useSelector((store) => store.item);
  const bag = useSelector((store) => store.bag);
  const bagItems = items.filter((item) => bag.includes(item.id));

  return (
    <>
      {bag.length === 0 && <EmptyBag />}
      {bag.length !== 0 && (
        <div>
          <div className={`${style["bag-page"]} my-5`}>
            <div className={style["bag-items-container"]}>
              {bagItems.map((item) => {
                return <BagItems key={item.id} item={item} />;
              })}
            </div>
            <div className={style["bag-summary"]}>
              <BagSummery items={bagItems} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
