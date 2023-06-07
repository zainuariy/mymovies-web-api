import './search-bar.js';

const main = () => {
let searchElement = document.querySelector("search-bar");
let movieItem = document.querySelector("#movie");

const onButtonSearchClicked = () => {
getMovie(searchElement.value);
};

searchElement.clickEvent = onButtonSearchClicked;

let getMovie = (movieName) => {
    return fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=5ba57138`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.Response == "True") {
          movieItem.innerHTML = `
          <style>
          #movie {
            color: #ffffff;
          }
          .info {
            position: relative;
            display: grid;
            grid-template-columns: 4fr 8fr;
            align-items: center;
            margin-top: 1.2em;
          }
          .poster {
            width: 100%;
          }
          h2 {
            text-align: center;
            font-size: 1.5em;
            font-weight: 600;
            letter-spacing: 0.06em;
          }
          .rating {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6em;
            margin: 0.6em 0 0.9em 0;
          }
          .rating img {
            width: 1.2em;
          }
          .rating h4 {
            display: inline-block;
            font-size: 1.1em;
            font-weight: 500;
          }
          .details {
            display: flex;
            font-size: 0.95em;
            gap: 1em;
            justify-content: center;
            color: #a0a0a0;
            margin: 0.6em 0;
            font-weight: 300;
          }
          .genre {
            display: flex;
            justify-content: space-around;
          }
          .genre div {
            border: 0.1px solid #868686;
            font-size: 0.75em;
            padding: 0.4em 1.6em;
            border-radius: 0.4em;
            font-weight: 300;
          }
          h3 {
            font-weight: 500;
            margin-top: 1.2em;
          }
          p {
            font-size: 0.9em;
            font-weight: 300;
            line-height: 1.8em;
            text-align: justify;
            color: #a0a0a0;
          }

          @media screen and (max-width: 600px) {
          .info {
            grid-template-columns: 1fr;
          }
          .poster {
            margin: auto;
            width: auto;
            max-height: 10.8em;
          }
          }
          </style>

            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <h4>Votes:</h4>
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
        `;
        }
        else {
          movieItem.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      .catch(() => {
        movieItem.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  } 
};

export default main;