import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/userContext";
import axios from "axios";
import Table from "./components/table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  const fetchAPI = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className={`${theme ? "bg-gray-800  text-white" : ""} h-screen `}>
      <ThemeContext.Provider value={(theme, setTheme)}>
        <UserContext.Provider value={data}>
          <div className="text-end p-5 ">
            <button
              type="button"
              className="border border-gray-300 hover:bg-gray-800 hover:text-white
              p-2 rounded-md "
              onClick={() => setTheme(!theme)}
            >
              {theme ? "Dark" : "Light"}{" "}
            </button>
          </div>
          <Table />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
