import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([
    {
      name: "Frankenstein",
      id: "1"
    },
    {
      name: "Dracula",
      id: "2"
    },
    {
      name: "Zombie",
      id: "3"
    }
  ]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setMonsters(res.data);
      } catch (err) {
        console.log("error");
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);
  console.log(searchField);

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Fragment>
      <div className="App">
        <SearchBox
          placeholder="search peeps"
          handleChange={e => setSearchField(e.target.value)}
        />
        <CardList monsters={filteredMonsters} />
        <p />
      </div>
    </Fragment>
  );
};

export default App;
