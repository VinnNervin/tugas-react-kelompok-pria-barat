import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";

function App() {
  const [sideBarState, setSideBarState] = useState(false);
  const [history, setHistory] = useState([]);
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const fetchCity = async (city) => {
    try {
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

  return (
    <Router>
      <div className="flex min-h-screen flex-row ">
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
