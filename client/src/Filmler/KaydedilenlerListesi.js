import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
        <button onClick={handleClick} className="home-button">
          Anasayfa
        </button>
    </div>
  );
}
