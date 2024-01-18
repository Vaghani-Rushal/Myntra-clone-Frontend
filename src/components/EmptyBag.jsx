import React from "react";
import style from "./CSS-Modules/Shop.module.css";
import { Link } from "react-router-dom";

export default function EmptyBag() {
  return (
    <>
      <div className="px-4 py-2 my-5 text-center">
        <img src="images/empty-bag.webp" />
        <h1 className={`${style["empty-bag-heading"]} ml-5`}>
          Hey, it feels so light!
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="empty-bag-desc my-3">
            There is nothing in your bag. Let's add some items.
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-2">
            <div>
              <Link
                data-testid="button"
                className={style["empty-bag-button"]}
                to="/shop"
              >
                ADD ITEMS FROM SHOP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
