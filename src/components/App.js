import "../styles/App.scss";
import { useEffect, useState } from "react";
// import localStorage from "../services/localStorage";
import getData from "../services/api";

function App() {
  ///////STATE
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [newQuote, setNewQuote] = useState({
    quote: "",
    character: "",
  });

  // const [movies, setMovies] = useState(localStorage.get("movies", []));

  ///////EFFECTS

  useEffect(() => {
    getData().then((data) => {
      setList(data);
    });
  }, []);

  ///////EVENTS

  //Evento CHANGE de los input de Añadir un nuevo Item
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.id;
    // const inputChanged = ev.target.name;
    setNewQuote({
      ...newQuote,
      [inputChanged]: inputValue,
    });
  };

  //Evento CHANGE del input de Filtrar
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  //Evento Click al pulsar el boton Añadir
  const handleAddnewQuote = (ev) => {
    ev.preventDefault();

    if (newQuote.quote !== "" && newQuote.character !== "") {
      setList([...list, newQuote]);
      setNewQuote({
        quote: "",
        character: "",
      });
    }
  };

  /////RENDER HELPERS
  // const renderFilter = () => {
  //   return (
  //     <form>
  //       <input
  //         className="header__search"
  //         autoComplete="off"
  //         type="search"
  //         name="search"
  //         placeholder="Filtrar contactos por nombre"
  //         value={search}
  //         onChange={handleSearch}
  //       />
  //     </form>
  //   );
  // };

  const renderList = () => {
    return (
      list

        // .filter(
        //   (itemList) =>
        //     //filtra por nombre O filtra por Apellido
        //     itemList.name.toLowerCase().includes(search.toLowerCase()) ||
        //     itemList.lastname.toLowerCase().includes(search.toLowerCase())
        // )

        .map((itemList, index) => {
          return (
            <li className="quote__item" key={index}>
              <p className="quote__pharase">
                {itemList.quote} -{" "}
                <span className="quote__character">{itemList.character} </span>
              </p>
            </li>
          );
        })
    );
  };

  const renderAddNewQuote = () => {
    return (
      <form className="new-quote__form">
        <h2 className="new-quote__title">Añade una nueva frase</h2>

        <div>
          <label htmlFor="quote">Frase</label>
          <input
            className="new-quote__input"
            type="text"
            name="quote"
            id="quote"
            placeholder="Introduce la frase"
            value={newQuote.quote}
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="character">Personaje</label>
          <input
            className="new-quote__input"
            type="text"
            name="character"
            id="character"
            placeholder="Introduce el personaje"
            value={newQuote.character}
            onChange={handleInput}
          />
        </div>

        <input
          className="new-quote__btn"
          type="submit"
          value="Añadir una nueva frase"
          onClick={handleAddnewQuote}
        />
      </form>
    );
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Frases de Friends</h1>
        {/* {renderFilter()} */}
      </header>

      <main>
        <ul className="quote__list">{renderList()}</ul>

        {/* {renderAddNewQuote()} */}
      </main>
    </div>
  );
}

export default App;
