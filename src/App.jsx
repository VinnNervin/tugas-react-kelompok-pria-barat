import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SideBar from "@/components/side-bar";
import Content from "@/components/content";
import About from "@/pages/About";

function App() {
  const [sideBarState, setSideBarState] = useState(false);
  const [history, setHistory] = useState([]);
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const fetchCity = async (city) => {
    try {
      handleHistory(city);
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10cacaf11d35699effe96043a5008edd&units=metric&lang=id`
      );
      console.log(data);
      if (!data.ok) {
        throw new Error(`Kota "${city}" tidak ditemukan`);
      }
      const response = await data.json();
      setWeatherData(response);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const getHistory = () => {
    localStorage.getItem("history")
      ? setHistory(JSON.parse(localStorage.getItem("history")))
      : setHistory([]);
  };

  const getLocations = () => {
    localStorage.getItem("locations")
      ? setLocations(JSON.parse(localStorage.getItem("locations")))
      : setLocations([]);
  };

  useEffect(() => {
    getHistory();
    getLocations();
  }, []);

  const handleHistory = (city) => {
    if (history.length >= 5) {
      setHistory([...history.pop()]);
    }
    if (!history.includes(city.toLowerCase())) {
      const newHistory = [city.toLowerCase(), ...history];
      setHistory(newHistory);
      localStorage.setItem("history", JSON.stringify(newHistory));
    }
  };

  const handleLocationClick = (location) => {
    fetchCity(location);
    setSideBarState(false);
  };

  const handleDeleteClick = (data) => {
    const { item, type } = data;
    if (type === "history") {
      setHistory((prev) => {
        const next = prev.filter((h) => h !== item);
        localStorage.setItem("history", JSON.stringify(next));
        return next;
      });
    } else if (type === "location") {
      setLocations((prev) => {
        const next = prev.filter((l) => l !== item);
        localStorage.setItem("locations", JSON.stringify(next));
        return next;
      });
    }
  };

  const handleSaveClick = (data) => {
    const { item, type } = data;
    if (type === "history") {
      const key = item;
      setLocations((prev) => {
        if (prev.includes(key)) return prev;
        const next = [key, ...prev];
        localStorage.setItem("locations", JSON.stringify(next));
        return next;
      });
    }
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-row ">
        <SideBar
          sideBarState={sideBarState}
          setSideBarState={setSideBarState}
          history={history}
          locations={locations}
          onLocationClick={handleLocationClick}
          onDeleteClick={handleDeleteClick}
          onSaveClick={handleSaveClick}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/weather" replace />} />
          <Route
            path="/weather/"
            element={
              <Content
                sideBarState={sideBarState}
                setSideBarState={setSideBarState}
                onFetchCity={fetchCity}
                weatherData={weatherData}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
