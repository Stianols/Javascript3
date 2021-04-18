const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector(".results");
container.innerHTML = "";

async function getGames() {

try {
    const response = await fetch(url);
    const games = await response.json();
    container.classList.remove("loading");
    for(let i = 0; i < 8; i++) {
        container.innerHTML += `<div class = "game-item">
        <div>Name: ${games.results[i].name}</div>
        <div>Rating: ${games.results[i].rating}</div>
        <div>Tags: ${games.results[i].tags.length}</div>
        </div>`;
    }
}

catch(error) {
    container.classList.remove("loading");
    container.innerHTML = `<div class = "error">An error has occurred</div>`;
    }
}

getGames();