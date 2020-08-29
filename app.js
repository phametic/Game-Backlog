//Create video game object
function Game(title, genre, score, played) {
  this.title = title;
  this.genre = genre;
  this.score = score;
  this.played = played;
}

let myLibrary = [
  {
    title: "Ghost of Tsushima",
    genre: "Action Adventure",
    rating: "M",
    score: "9.5/10",
    played: true,
  },
  {
    title: "Last of Us 2",
    genre: "Action Adventure",
    rating: "M",
    score: "9.5/10",
    played: true,
  },
];

const libraryGrid = document.getElementById("LibraryGrid");
const modal = document.getElementById("myModal");
const addGameBtn =  document.getElementById("AddGameBtn");
const modalCloseBtn = document.getElementsByClassName("close")[0];

//Add game button
addGameBtn.onclick = () => {
  modal.style.display = "flex";
};

//Close button of modal
modalCloseBtn.onclick = () => {
  modal.style.display = "none";
};

//When user clicks anywhere in modal, close the modal
window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
  }
};

//add game to array
function addGame() {
   
}

//Render objects / elements to website
function render(arr) {
  arr.forEach(element => {
    const gameTitle = document.createElement("p");
    const gameGenre = document.createElement("p");
    const gameScore = document.createElement("p");
    const gamePlayed = document.createElement("p");
    const container = document.createElement("div");
    const optionsPanel = document.createElement("div");

    const deleteButton = document.createElement("span");

    const playedToggle = document.createElement("input");
    const playedToggleLabel = document.createElement("label");
    const slider = document.createElement("span");

    gameTitle.className = "GameTitleStyle";
    gameTitle.textContent = element.title;

    gameGenre.className = "GameGenreStyle";
    gameGenre.textContent = "Genre: " + element.genre;

    gameScore.className = "GameScoreStyle";
    gameScore.textContent = "Review Score: " + element.score;

    gamePlayed.className = "GamePlayedStyle";
    gamePlayed.textContent = element.played ? "Played." : "Not Played.";

    optionsPanel.className = "OptionsPanel";

    playedToggleLabel.className = "switch";

    playedToggle.className = "";
    playedToggle.setAttribute("type", "checkbox");

    slider.setAttribute("class", "slider round");

    container.className = "GameDataContainerStyle";

    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    playedToggleLabel.appendChild(playedToggle);
    playedToggleLabel.appendChild(slider);

    container.appendChild(gameTitle);
    container.appendChild(gameGenre);
    container.appendChild(gameScore);
    container.appendChild(gamePlayed);

    optionsPanel.appendChild(playedToggleLabel);
    optionsPanel.appendChild(deleteButton);

    container.appendChild(optionsPanel);
    libraryGrid.appendChild(container);
    
  });
}

render(myLibrary);