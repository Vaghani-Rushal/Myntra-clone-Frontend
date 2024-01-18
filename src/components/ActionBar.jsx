import style from "./CSS-Modules/Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ActionBar() {
  const {
    action_container,
    action_icon,
    profile_icon,
    wishlist_icon,
    bag_icon_container,
    bag_icon,
    bag_item_count,
  } = style;

  const bag = useSelector((store) => store.bag);

  return (
    <>
      <div className={action_container}>
        <span
          className={`material-symbols-outlined  ${action_icon}  ${profile_icon}`}
        ></span>
        <span className="action_name">Profile</span>
      </div>

      <div className={action_container}>
        <span
          className={`material-symbols-outlined ${action_icon} ${wishlist_icon}`}
        ></span>
        <span className="action_name">Wishlist</span>
      </div>

      <Link className={`${bag_icon_container} ${action_container} `} to="/bag">
        <span
          className={`material-symbols-outlined ${action_icon} ${bag_icon}`}
        ></span>
        <span className="action_name">Bag</span>
        <span className={bag_item_count}>{bag.length}</span>
      </Link>
    </>
  );
}
