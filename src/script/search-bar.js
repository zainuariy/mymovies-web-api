class SearchBar extends HTMLElement {

connectedCallback() {
  this.render();
}

set clickEvent(event) {
  this._clickEvent = event;
  this.render();
}

get value() {
  return this.querySelector("#searchElement").value;
}

render() {
  this.innerHTML = `
    <style>
    .search-container {
      display: grid;
      grid-template-columns: 9fr 3fr;
      gap: 1.2em;
    }
    .search-container input,
    .search-container button {
      font-size: 0.9em;
      outline: none;
      border-radius: 0.3em;
    }
    .search-container input {
      background-color: transparent;
      border: 1px solid #e50914;
      padding: 0.7em;
      color: #ffffff;
    }
    .search-container input:focus {
      border-color: #ffffff;
    }
    .search-container button {
      background-color: #e50914;
      border: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
    }
    </style>
    
    <div class="search-container" >
    <input
      id="searchElement"
      type="search"
      placeholder="Search your movie heree..."
      value="Fast X"
    />
    <button id="searchBtn" type="submit">Search</button>
  </div>
  `;

  this.querySelector("#searchBtn").addEventListener("click", this._clickEvent);
}
}

customElements.define("search-bar", SearchBar);
