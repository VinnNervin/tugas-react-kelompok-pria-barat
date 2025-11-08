import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import "./menu-items.css";
const Menu = ({
  title,
  items,
  type = "menu",
  onItemClick,
  onDeleteClick,
  onSaveClick,
}) => {
  const ItemMainClick = (item) => {
    onItemClick?.(item);
  };

  const deleteItem = (item) => {
    onDeleteClick?.({ item, type });
  };

  const saveItem = (item) => {
    onSaveClick?.({ item, type });
  };

  const ICON = {
    history: "time-outline",
    location: "location-outline",
    menu: "menu",
  };

  const iconName = ICON[type] || ICON["menu"];

  return (
    <div className="menu-root">
      <h2 className="menu-title">{title || "Menu"}</h2>
      {items.map((item) => (
        <div key={item} href="#" className="menu-item">
          <button onClick={() => ItemMainClick(item)} className="menu-button">
            <ion-icon name={iconName} className="text-xl"></ion-icon>
            <span className="capitalize">{item}</span>
          </button>
          <div className="menu-actions">
            {type === "history" ? (
              <FavoriteBorderIcon onClick={() => saveItem(item)} />
            ) : null}

            <CloseIcon onClick={() => deleteItem(item)} />
          </div>
        </div>
      ))}
      {items.length === 0 && <p className="menu-empty">Tidak ada {title}.</p>}
    </div>
  );
};

export default Menu;
