import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import ActionBar from "./ActionBar";
import style from "./CSS-Modules/Header.module.css";

export default function Header() {
  const {
    logo_container,
    myntra_home,
    nav_bar,
    search_bar,
    search_icon,
    search_input,
    action_bar,
  } = style;

  return (
    <header>
      <div className={logo_container}>
        <Link to="/">
          <div className={myntra_home} />
        </Link>
      </div>

      <nav className={nav_bar}>
        <Link to="/shop">Men</Link>
        <Link to="/shop">Women</Link>
        <Link to="/shop">Kids</Link>
        <Link to="/shop">Home & Living</Link>
        <Link to="/shop">Beauty</Link>
        <Link to="/shop">
          Studio <sup>New</sup>
        </Link>
      </nav>

      <div className={search_bar}>
        <span className={`material-symbols-outlined ${search_icon}`}>
          <CiSearch />
        </span>
        <input
          className={search_input}
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className={action_bar}>
        <ActionBar />
      </div>
    </header>
  );
}
