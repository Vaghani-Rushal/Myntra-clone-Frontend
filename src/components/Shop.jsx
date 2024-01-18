import style from "./CSS-Modules/Shop.module.css";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";

export default function Shop() {
  const items = useSelector((store) => store.item);

  return (
    <div className={style.itemsContainer}>
      {items.map((item) => {
        return <ShopItem key={item.id} item={item} />;
      })}
    </div>
  );
}
