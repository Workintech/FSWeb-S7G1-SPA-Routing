import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          console.log(response.data);
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    let isSaved = saved.find((f) => f.id == id); // true or false
    if (!isSaved) {
      let savedMovie = movieList.find((m) => m.id == id);
      let newSaved = [...saved, savedMovie];
      setSaved(newSaved);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />

      <Switch>
        <Route path="/movies/:id">
          <Film save={KaydedilenlerListesineEkle} />
        </Route>
        <Route path="/">
          <FilmListesi movies={movieList} />
        </Route>
      </Switch>
      <div></div>
    </div>
  );
};