import clsx from "clsx";
import { Link } from "react-router-dom";
import Menu from "../menu-items";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
    <Box className=" fixed h-screen md:relative z-50  md:w-fit  bg-secondary/80 md:bg-secondary flex flex-row  md:border-r-2">
      <div
        className={clsx(
          "bg-secondary md:min-w-[250px] transition-all duration-500  ease-in-out",
          sideBarState ? "w-[80vw]" : "w-0 overflow-x-hidden"
        )}
      >
        <div className="flex mb-8 justify-between items-center p-4 ">
          <p className="text-2xl font-bold ">WeatherApp</p>
          <Button
            disableElevation
            variant="text"
            sx={{
              display: { sm: "none" },
            }}
            onClick={() => setSideBarState(!sideBarState)}
          >
            <CloseIcon />
          </Button>
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
        <div className="px-4">
          <Button className="w-full h-fit">
            <Link
              to="/about"
              onClick={() => setSideBarState(false)}
              className="w-full flex justify-center items-center gap-4"
            >
              <ion-icon
                name="information-circle-outline"
                className="text-xl"
              ></ion-icon>
              <span>Tentang Kami</span>
            </Link>
          </Button>
        </div>
      </div>
      {sideBarState && (
        <div
          onClick={() => setSideBarState(false)}
          className="overlay w-screen flex-1  h-full bg-black opacity-50 md:hidden"
        ></div>
      )}
    </Box>
  );
}

export default SideBar;
