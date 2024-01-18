import React from "react";
import style from "./CSS-Modules/Home.module.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";

const sale_item_print = (folder_name, items) => {
  let innerHtml = "";
  for (let index = 1; index <= items; index++) {
    let image = `images/${folder_name}/${index}.png`;
    innerHtml += `
    <Link to="/shop"><img className=${style["sale_item"]} src="images/${folder_name}/${index}.png" /></Link>`;
  }
  return (
    <div className={style.category_items}>{ReactHtmlParser(innerHtml)}</div>
  );
};

export default function Home() {
  return (
    <>
      <div className={style.banner_container}>
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/banner1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/banner2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/banner3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className={style.category_heading}>MEDAL WORTHY BRANDS TO BAG</div>
      {sale_item_print("offers", 12)}

      <div className={style.category_heading}>SHOP BY CATEGORY</div>
      {sale_item_print("categories", 10)}
    </>
  );
}
