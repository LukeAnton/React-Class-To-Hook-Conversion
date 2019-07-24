import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/card-list/CardList";

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

  return (
    <Fragment>
      <div className="App">
        <CardList>
          {monsters.map(monster => (
            <p key={monster.id}>{monster.name}</p>
          ))}
        </CardList>
        <p />
      </div>
    </Fragment>
  );
};

export default App;
