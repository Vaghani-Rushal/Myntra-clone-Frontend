import React from "react";
import style from "./CSS-Modules/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.footer_container}>
          <div className={style.footer_column}>
            <h3>ONLINE SHOPPING</h3>

            <Link to="/shop">Men</Link>
            <Link to="/shop">Women</Link>
            <Link to="/shop">Kids</Link>
            <Link to="/shop">Home & Living</Link>
            <Link to="/shop">Beauty</Link>
            <Link to="/shop">Gift Card</Link>
            <Link to="/shop">Myntra Insider</Link>
          </div>

          <div className={style.footer_column}>
            <h3>ONLINE SHOPPING</h3>

            <Link to="/shop">Men</Link>
            <Link to="/shop">Women</Link>
            <Link to="/shop">Kids</Link>
            <Link to="/shop">Home & Living</Link>
            <Link to="/shop">Beauty</Link>
            <Link to="/shop">Gift Card</Link>
            <Link to="/shop">Myntra Insider</Link>
          </div>

          <div className={style.footer_column}>
            <h3>ONLINE SHOPPING</h3>

            <Link to="/shop">Men</Link>
            <Link to="/shop">Women</Link>
            <Link to="/shop">Kids</Link>
            <Link to="/shop">Home & Living</Link>
            <Link to="/shop">Beauty</Link>
            <Link to="/shop">Gift Card</Link>
            <Link to="/shop">Myntra Insider</Link>
          </div>
        </div>
        <hr />

        <div className={style.copyright}>
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
}
