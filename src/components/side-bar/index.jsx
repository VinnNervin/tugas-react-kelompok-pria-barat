import clsx from "clsx";
import { Link } from "react-router-dom";
import Menu from "../menu-items";

function SideBar({
  sideBarState,
  setSideBarState,
  history,
  locations,
  onLocationClick,
  onDeleteClick,
  onSaveClick,
}) {
  const handleLocationClick = (location) => {
    onLocationClick(location);
  };

  const handleDeleteClick = (target) => {
    onDeleteClick(target);
  };

  const handleSaveClick = (target) => {
    onSaveClick(target);
  };

  return (
    <aside className=" fixed h-screen md:relative z-50  md:w-fit  bg-secondary/80 md:bg-secondary flex flex-row ">
      <div
        className={clsx(
          "bg-secondary md:min-w-[250px] transition-all duration-500  ease-in-out",
          sideBarState ? "w-[80vw]" : "w-0 overflow-x-hidden"
        )}
      >
        <div className="flex mb-8 justify-between items-center p-4 ">
          <p className="text-2xl font-bold ">WeatherApp</p>
          <button
            className="md:hidden p-2 flex items-center justify-center hover:bg-primary rounded-lg "
            onClick={() => setSideBarState(!sideBarState)}
          >
            <ion-icon name="close" class="text-2xl"></ion-icon>
          </button>
        </div>

        <Menu
          title="Lokasi tersimpan"
          items={locations}
          type="location"
          onItemClick={handleLocationClick}
          onDeleteClick={handleDeleteClick}
        />
        <Menu
          title="Riwayat pencarian"
          items={history}
          type="history"
          onItemClick={handleLocationClick}
          onDeleteClick={handleDeleteClick}
          onSaveClick={handleSaveClick}
        />

        <div className="px-4 mb-8">
          <Link
            to="/about"
            onClick={() => setSideBarState(false)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <ion-icon
              name="information-circle-outline"
              className="text-xl"
            ></ion-icon>
            <span>Tentang Kami</span>
          </Link>
        </div>
      </div>
      {sideBarState && (
        <div
          onClick={() => setSideBarState(false)}
          className="overlay w-screen flex-1  h-full bg-black opacity-50 md:hidden"
        ></div>
      )}
    </aside>
  );
}

export default SideBar;
