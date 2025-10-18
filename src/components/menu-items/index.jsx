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
    <div className="px-4 mb-8">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
        {title || "Menu"}
      </h2>
      {items.map((item) => (
        <div
          key={item}
          href="#"
          className="flex items-center justify-between gap-3 p-2 rounded-lg w-full hover:bg-gray-700 transition-colors duration-200"
        >
          <button
            onClick={() => ItemMainClick(item)}
            className="flex w-full gap-2 items-center"
          >
            <ion-icon name={iconName} className="text-xl"></ion-icon>
            <span className="capitalize">{item}</span>
          </button>
          <div className="flex justify-end items-center 0 flex-grow">
            {type === "history" ? (
              <ion-icon
                className="text-xl"
                name="heart-outline"
                onClick={() => saveItem(item)}
              ></ion-icon>
            ) : null}
            <ion-icon
              className="text-xl"
              name="close-outline"
              onClick={() => deleteItem(item)}
            ></ion-icon>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <p className="text-gray-500">Tidak ada {title}.</p>
      )}
    </div>
  );
};

export default Menu;
