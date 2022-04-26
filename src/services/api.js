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
