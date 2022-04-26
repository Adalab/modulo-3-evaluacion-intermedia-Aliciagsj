function getData() {
  return fetch(
    "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const clearData = data.map((item) => {
        return {
          quote: item.quote,
          character: item.character,
        };
      });

      return clearData;
    });
}

export default getData;

/*

const callToApi = () => {
  // Llamamos a la API
  return fetch("https://swapi.dev/api/people/5") // Este 5 es el id de Leia Skywalker
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color,
      };
      return result;
    });
};

export default callToApi;

/*
const callToApi = (searchName) => {
  // Recibimos por parámetros searchName, que nos lo pasan desde App dentro del useEffect
  // Llamamos al fetch interpolando la URL de la API más el nombre buscado
  return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      // La respuesta de la API es un objeto que dentro tiene la propiedad results, que es un array
      // Recorremos el array results obteniendo solo el nombre
      // Esto lo hacemos para limpiar la respuesta de la API antes de devolverla al componente App
      // Esto es opcional pero recomendado
      const result = response.results.map((character) => {
        return {
          name: character.name,
        };
      });
      // Retornamos los resultados de la API al componente App
      return result;
    });
};

export default callToApi;





*/
