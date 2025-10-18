import { useRef } from "react";

function Content({ sideBarState, setSideBarState, onFetchCity, weatherData }) {
  const searchInput = useRef("");

  const weatherInformation =
    weatherData?.cod === 200
      ? [
          { label: "Terasa", value: weatherData?.main.feels_like, unit: "°C" },
          { label: "Kelembapan", value: weatherData?.main.humidity, unit: "%" },
          { label: "Angin", value: weatherData?.wind.speed, unit: "km/j" },
          { label: "Tekanan", value: weatherData?.main.pressure, unit: "hPa" },
          {
            label: "temperatur tertinggi",
            value: weatherData?.main.temp_max,
            unit: "°C",
          },
          {
            label: "temperatur terendah",
            value: weatherData?.main.temp_min,
            unit: "°C",
          },
        ]
      : [];

  const handleFetch = (city) => {
    onFetchCity(city);
  };

  return (
    <main className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <button
            className="md:hidden hover:scale-125 transition-all duration-150 ease-in-out flex items-center justify-center hover:bg-primary rounded-lg "
            onClick={() => setSideBarState(!sideBarState)}
          >
            <ion-icon name="menu" className="text-2xl"></ion-icon>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">
            {weatherData?.name || "Silahkan cari nama kota "}
          </h1>
          <p className="text-gray-400">Rabu, 1 Oktober 2025</p>
        </div>
        <div className="w-full md:w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari kota..."
              ref={searchInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFetch(searchInput.current.value);
                  searchInput.current.value = "";
                }
              }}
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 pl-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
        </div>
      </div>

      {weatherData?.cod === 200 && (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div>
                <p className="text-6xl md:text-8xl font-bold">
                  {weatherData?.main.temp}°C
                </p>
                <p className="text-xl font-medium mt-1 text-gray-300">
                  {weatherData ? weatherData.weather[0].description : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 flex flex-col justify-around">
            {weatherInformation.length > 0 &&
              weatherInformation.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-400">{info.label}</span>
                  <span className="font-bold text-lg">
                    {info.value} {info.unit}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Content;
