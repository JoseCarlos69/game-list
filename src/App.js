import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [gridColumns, setGridColumns] = useState("repeat(auto-fit, minmax(400px, 1fr))");

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const email = "seu-email@example.com"; // Substitua pelo seu endereço de e-mail
      const response = await fetch(
        "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
        {
          headers: {
            "dev-email-address": email
          }
        }
      );

      if (!response.ok) {
        if (
          response.status === 500 ||
          response.status === 502 ||
          response.status === 503 ||
          response.status === 504 ||
          response.status === 507 ||
          response.status === 508 ||
          response.status === 509
        ) {
          setError("O servidor falhou em responder, tente recarregar a página");
        } else {
          setError(
            "O servidor não conseguiu responder por agora, tente voltar novamente mais tarde"
          );
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setGames(data);

      // Extrair os diferentes gêneros encontrados
      const uniqueGenres = [...new Set(data.map((game) => game.genre))];
      setGenres(uniqueGenres);

      setLoading(false);
    } catch (error) {
      setError("O servidor demorou para responder, tente mais tarde");
      setLoading(false);
    }
  };

  useEffect(() => {
    filterGames();
  }, [games, searchTerm, selectedGenres]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleGenreToggle = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const filterGames = () => {
    let filteredGames = games;

    if (searchTerm) {
      filteredGames = filteredGames.filter((game) =>
        game.title.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedGenres.length > 0) {
      filteredGames = filteredGames.filter((game) =>
        selectedGenres.some((selectedGenre) => game.genre.includes(selectedGenre))
      );
    }

    setFilteredGames(filteredGames);
  };

  return (
    <div className="container">
      <div className="genre-filter">
        <h4>Genres:</h4>
          {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-button ${selectedGenres.includes(genre) ? "active" : ""}`}
            onClick={() => handleGenreToggle(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <input type="text" placeholder="Search by title" onChange={handleSearch} />

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="game-list">
          {filteredGames.map((game) => (
            <div className="game-card" key={game.id}>
              <img src={game.thumbnail} alt={game.title} />
              <h3>{game.title}</h3>
              <p>{game.short_description}</p>
              <p>Genre: {game.genre}</p>
              <p>Platform: {game.platform}</p>
              <p>Publisher: {game.publisher}</p>
              <p>Developer: {game.developer}</p>
              <p>Release Date: {game.release_date}</p>
              <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                <button className="play-button">Play Game</button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

