//Create video game object
function Game(title, console, genre, score, completed) {
  this.title = title;
  this.console = console;
  this.genre = genre;
  this.score = score;
  this.completed = completed;
}

let myLibrary = [
  {
    title: "Ghost of Tsushima",
    console: "Playstation 4",
    genre: "Action Adventure",
    rating: "M",
    score: "9.5/10",
    completed: true,
  },
  {
    title: "Last of Us 2",
    console: "Playstation 4",
    genre: "Action Adventure",
    rating: "M",
    score: "9.5/10",
    completed: false,
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


//Render objects / elements to website
function render(arr) {
  while(libraryGrid.hasChildNodes()) {
    libraryGrid.removeChild(libraryGrid.firstChild);
  }
  arr.forEach((element, index) => {
    const gameTitle = document.createElement("p");
    const gameConsole = document.createElement("p");
    const gameGenre = document.createElement("p");
    const gameScore = document.createElement("p");
    const gameCompleted = document.createElement("p");
    const container = document.createElement("div");
    const optionsPanel = document.createElement("div");

    const deleteButton = document.createElement("span");

    gameTitle.className = "GameTitleStyle";
    gameTitle.textContent = element.title;

    gameConsole.className = "GameConsoleStyle";
    gameConsole.textContent = element.console;

    gameGenre.className = "GameGenreStyle";
    gameGenre.textContent = "Genre: " + element.genre;

    gameScore.className = "GameScoreStyle";
    gameScore.textContent = "Review Score: " + element.score;

    gameCompleted.className = "GameCompletedStyle";
    gameCompleted.id = "gameCompleted";
    gameCompleted.textContent = element.played ? "Completed." : "Not Completed.";

    optionsPanel.className = "OptionsPanel";

    container.className = "GameDataContainerStyle";
    container.id = "container-" + index;

    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    container.appendChild(gameTitle);
    container.appendChild(gameConsole);
    container.appendChild(gameGenre);
    container.appendChild(gameScore);

    optionsPanel.appendChild(gameCompleted);
    optionsPanel.appendChild(deleteButton);

    container.appendChild(optionsPanel);
    libraryGrid.appendChild(container);
    
  });
}

function loadListeners() {
 document.querySelectorAll(".GameDataContainerStyle").forEach(container => {
   console.log(container);
  const gameCompletedText = container.querySelector("#gameCompleted");
  const containerId = container.getAttribute('id').slice(10);
  const deleteBtn = container.querySelector(".deleteButton");

  gameCompletedText.addEventListener("click", element => toggleGameCompletion(element, containerId));
  deleteBtn.addEventListener("click", element => deleteGame(containerId));
 });
  
}

//add game to array
function addGame() {
   
}

//Delete from array
function deleteGame(containerId) {
  alert("Game Deleted!");
  delete myLibrary[containerId];
  render(myLibrary);
  loadListeners();
}

function toggleGameCompletion(element, containerId) {
  //alert("Button Pressed" + containerId);
  if(myLibrary[containerId].completed) {
    myLibrary[containerId].completed = false;
    element.target.textContent = "Not Completed";
    element.target.style.color = "white";
  } else {
    myLibrary[containerId].completed = true;
    element.target.textContent = "Completed";
    element.target.style.color = "#25FC0D";
  }
}

render(myLibrary);
loadListeners();