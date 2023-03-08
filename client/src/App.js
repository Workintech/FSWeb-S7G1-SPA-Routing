import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Film from './Filmler/Film';
import FilmListesi from "./Filmler/FilmListesi";
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          setMovieList(response.data);
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (movie) => {
    const newArr = saved;
    newArr.find((e) => e.id === movie.id) !== null && newArr.push(movie);
    setSaved([...newArr]);
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi list={[ saved]} />
      <Route exact path="/">
        <FilmListesi movies ={movieList} />
      </Route>
      <Route path="/filmler/:id">
        <Film
          KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
          saved={saved}
        />
      </Route>
      
    </div>
  );
}
