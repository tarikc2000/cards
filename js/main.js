// klasa menu i dictionary niz (JSON objects) //

class MenuInfo {
  constructor() {
    this.detailsDictionary = [
      {
        title: "O projektu",
        detail: "Projekt se temelji na nekoliko relativno novih paradigmi i modela u web programiranju. " +
        "U dizajnu same igrice, njenom izgledu i mogućnostima koristio sam CSS3 standard. Relativno nov " +
        "standard omogućava brz i pouzdan pristup dizajnu sučelja i animacija. Koristio sam " +
        "model CSS3 standarda 'Flexbox'(CSS Flexible Box Layout). S druge strane igra 'CARDS' se oslanja" + 
        "na još jednu novu paradigmu kada je u pitanju web programiranje ovaj put odnosi se na " +
        "JavaScript. Naime i nakon nekoliko decenija JavaScript kao programski jezik tek sa ECMA2016 standardom " +
        "predstavljene su nove mogućnosti. Koristim ih nekoliko:" +
        "1.) JavaScript let i const 2.) Arrow functions  3.) JavaScript Classes ." +
        "Nove mogućnosti , posebno OOP-e (objektno-orijentisano programiranje) " +
        "omogućile se pisanje jasnijeg ,preglednijeg" +
        "i učinkovitijeg coda i lakši debug."
      },
      {
        title: "Predmet",
        detail: `Web programiranje I`
      },
      {
        title: "Studij",
        detail: `Stručni studij "Informacione tehnologije"`
      },
      {
        title: "Fakultet",
        detail: `Prirodno-matematički fakultet`
      },
      {
        title: "Naziv projekta",
        detail: `Igra: "Cards"`
      },
      {
        title: "Podaci o autoru",
        detail: `Tarik Čordalija`
      }
    ];
  }
  // inicijalizacija menija /
  initInfo() {
    let infoLink = document.getElementById("info-link");
    infoLink.addEventListener(
      "click",
      () => {
        console.log(infoLink);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[0].title,
          this.detailsDictionary[0].detail
        );
      },
      false
    );
     // opcija predmet u meniju //
    let predmet = document.getElementById("predmet");
    predmet.addEventListener(
      "click",
      () => {
        console.log(predmet);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[1].title,
          this.detailsDictionary[1].detail
        );
      },
      false
    );
  // opcija studij u meniju //
    let studij = document.getElementById("studij");
    studij.addEventListener(
      "click",
      () => {
        console.log(studij);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[2].title,
          this.detailsDictionary[2].detail
        );
      },
      false
    );
    // opcija fakultet u meniju //
    let fakultet = document.getElementById("fakultet");
    fakultet.addEventListener(
      "click",
      () => {
        console.log(fakultet);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[3].title,
          this.detailsDictionary[3].detail
        );
      },
      false
    );
    // opcija naziv u meniju //
    let naziv = document.getElementById("naziv");
    naziv.addEventListener(
      "click",
      () => {
        console.log(naziv);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[4].title,
          this.detailsDictionary[4].detail
        );
      },
      false
    );
   // opcija autor u meniju //
    let autor = document.getElementById("autor");
    autor.addEventListener(
      "click",
      () => {
        console.log(autor);
        this.hideMenuLayer();
        this.showDetailsLayer(
          this.detailsDictionary[5].title,
          this.detailsDictionary[5].detail
        );
      },
      false
    );
    // povratak na meni opcija //
    let povratak_option_menu = document.getElementById("povratak-option-menu");
    povratak_option_menu.addEventListener(
      "click",
      () => {
        console.log(povratak_option_menu);
        this.hideDetailsLayer();
        this.showMenuLayer();
      },
      false
    );
      // povratak na game meni //
    let povratak_game_menu = document.getElementById("povratak-game-menu");
    povratak_game_menu.addEventListener(
      "click",
      () => {
        console.log("povratak_game_menu");

        this.showGameMenu();
      },
      false
    );
    // opcija informacije //
    let information = document.getElementById("information");
    information.addEventListener("click", () => {
      console.log(information);
      this.hideIntroGame();
      this.showMenuLayer();
    });
     // povratak s opcije upute //
    let povratak_upute_menu = document.getElementById("povratak-upute-menu");
    povratak_upute_menu.addEventListener("click", () => {
      console.log(povratak_upute_menu);
      this.hideUputeDetails();
      this.showIntroGame();
    });
     // opcija upute //
    let upute = document.getElementById("upute");
    upute.addEventListener("click", () => {
      console.log(upute);
      this.hideIntroGame();
      this.showUputeDetails();
    });
  }
   // "hide" meni sa opcijama projekta //
  hideMenuLayer() {
    let menuLayer = document.getElementById("projekt-info");
    menuLayer.classList.remove("visible-game");
  }
  // "prikazi" meni s opcijama projekta //
  showMenuLayer() {
    let menuLayer = document.getElementById("projekt-info");
    menuLayer.classList.add("visible-game");
  }
  // prikazi detalje o odredjenim opcijama projekta
  // @title parametar i @detail parametar
  // naslov i detalji o trazenoj opciji //
  showDetailsLayer(title, detail) {
    let titleElement = document.getElementById("naslov-info");
    let detailElement = document.getElementById("detail-info");

    titleElement.innerText = title;
    detailElement.innerText = detail;

    let infoLayer = document.getElementById("info");
    infoLayer.classList.add("visible-game");
  }
  // sakrij detail overlay //
  hideDetailsLayer() {
    let infoLayer = document.getElementById("info");
    infoLayer.classList.remove("visible-game");
  }
  // sakrij upustvo overlay //
  hideIntroGame() {
    let gameLayer = document.getElementById("intro-game");
    gameLayer.classList.remove("visible-game");
  }
  // prikazi upustvo overlay //
  showIntroGame() {
    let gameLayer = document.getElementById("intro-game");
    gameLayer.classList.add("visible-game");
  }
  // sakrij upute overlay //
  hideUputeDetails() {
    let gameLayer = document.getElementById("upute-game");
    gameLayer.classList.remove("visible-game");
  }
  // prikazi upute overlay //
  showUputeDetails() {
    let gameLayer = document.getElementById("upute-game");
    gameLayer.classList.add("visible-game");
  }
 // prikazi glavni meni igre //
  showGameMenu() {
    this.hideDetailsLayer();
    this.hideMenuLayer();
    this.showIntroGame();
  }
}
// klasa Player //
// sa propertisima i metodama //
// npr. property "playscore"
// npr. method "setScore"

class Player {
  constructor(idBoard, idScore, name) {
    this.idBoard = idBoard;
    this.idScore = idScore;
    this.playerScore = 0;
    this.playerName = name;
    this.playerBoard = document.getElementById(idBoard);
    this.playerScoreBoard = document.getElementById(idScore);
  }

  getName() {
    return this.playerName;
  }

  getScore() {
    return this.playerScore;
  }

  setScore(number) {
    this.playerScore = number;
    this.playerScoreBoard.innerText = this.playerScore;
  }
}
// klasa Game //
class Game {
  constructor(cards) {
    this.cardsArray = cards;
    this.clicks = 0;
    this.freeField = 0;
    this.player_1_score = document.getElementById("player_1-poen");
    this.player_2_score = document.getElementById("player_2-poen");
    this.player1 = new Player("player_1_board", "player_1-poen", "Player1");
    this.player2 = new Player("player_2_board", "player_2-poen", "Player2");
  }
  // inicijalizacija karata //
  initCards(cards) {
    cards.forEach(card => {
      // Standard syntax
      card.addEventListener("transitionend", () => {
        console.log("Transitioned");
        if (
          card.querySelector(".poen").innerText === "😀" ||
          card.querySelector(".poen").innerText === "😡"
        ) {
          setTimeout(() => {
            card.querySelector(".poen").innerText = this.getRndInteger(1, 10);
          }, 850);
        }
      });
    });
  }
  // not implemented //
  startGame() {
    this.cardToCheck = null;
  }
  // provejera da li je "smjesko" iza karte //
  isSmiley(card) {
    if (card.querySelector(".poen").innerText === "😀") {
      return true;
    }

    return false;
  }
  // provjera da li je "ljutko iza karte" //
  isAngry(card) {
    if (card.querySelector(".poen").innerText === "😡") {
      return true;
    }
    return false;
  }
  // na osnovu otvorenih karata , nova pozicija za smjeska //
  smileyPosition() {
    //////////////////////////////////////
    let itemPosition = this.getClickedCards();
    console.log("Smjesko", itemPosition);
    this.cardsArray[itemPosition].querySelector(".poen").innerText = "😀";
    /////////////////////////////////////
  }
  // na osnovu otvorenih karata , nova pozicija za ljutka //
  angryPosition() {
    let itemPosition = this.getClickedCards();
    console.log("Ljutko", itemPosition);
    this.cardsArray[itemPosition].querySelector(".poen").innerText = "😡";
    /////////////////////////////////////
  }
  // udvostruci poene ako je smjesko //
  smileyPlayerScore(player) {
    const doubleScore = player.getScore() * 2;
    player.setScore(doubleScore);
  }
  // poeni na 0 ako je ljutko //
  angryPlayerScore(player) {
    player.setScore(0);
  }
  // ako je broj igracu dodaj poene //
  // @parametri player i card
  numberPlayerScore(player, card) {
    card.classList.add("clicked");
    let score_number = parseInt(card.querySelector(".poen").innerText);
    let score_player = player.getScore();
    player.setScore(score_number + score_player);
  }
 // provjeri pobjednika //
  checkWinner() {
    if (this.player1.getScore() >= 50) {
      this.showWinner(this.player1.getName());
    } else if (this.player2.getScore() >= 50) {
      this.showWinner(this.player2.getName());
    }
  }
  // prikazi overlay za pobjednika //
  showWinner(name) {
    let overlay_winner = document.getElementById("game-win-text");
    let winnerText = document.getElementById("win-text");
    winnerText.innerText = name + " je pobijedio !";
    overlay_winner.classList.add("visible-game");
  }
  // ponovo ucitraj igru //
  reloadGame() {
    let overlay_winner = document.getElementById("game-win-text");
    overlay_winner.classList.remove("visible-game");
    let reloadGame = document.getElementById("reload-game");
    reloadGame.addEventListener("click", () => {
      location.reload();
    });
  }
  // glavna funkcija za "otvaranje karata" // 
  flipCard(card) {
    if (!this.canFlip(card)) {
      this.clicks++;

      card.classList.add("visible-card");
      // second player //
      if (this.clicks % 2 == 0) {
        if (this.isSmiley(card)) {
          // new smiley position //
          this.smileyPosition();
          // score for player2 //
          this.smileyPlayerScore(this.player2);
          // check winner //
          this.checkWinner();
        } else if (this.isAngry(card)) {
          // angry card on new position //
          this.angryPosition();
          // angry player score = 0 //
          this.angryPlayerScore(this.player2);
          // check winner /
          this.checkWinner();
        } else {
          // number player score //
          this.numberPlayerScore(this.player2, card);
          // check winner //
          this.checkWinner();
        }
      }
      // prvi igrač
      else {
        if (this.isSmiley(card)) {
          // new smiley position //
          this.smileyPosition();
          // smiley score player1 //
          this.smileyPlayerScore(this.player1);
          // check winner //
          this.checkWinner();
        } else if (this.isAngry(card)) {
          // new angry position //
          this.angryPosition();
          // angry player score = 0 //
          this.angryPlayerScore(this.player1);
          // check winner //
          this.checkWinner();
        } else {
          // number player score //
          this.numberPlayerScore(this.player1, card);
          // check winner //
          this.checkWinner();
        }
      }
      // flip back na click //
      setTimeout(() => {
        card.classList.remove("visible-card");
      }, 850);
    }
  }

  canFlip(card) {
    return card.classList.contains("fliped");
  }
// Random funkcije za broj bodova
  getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  getRndIntegerExcludeMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // nije implementirano //
  toTwoDimensionalArray(cards) {
    let twoDim = Array.from(Array(5), () => new Array(5));

    twoDim = [
      [cards[0], cards[1], cards[2], cards[3], cards[4]],
      [cards[5], cards[6], cards[7], cards[8], cards[9]],
      [cards[10], cards[11], cards[12], cards[13], cards[14]],
      [cards[15], cards[16], cards[17], cards[18], cards[19]],
      [cards[20], cards[21], cards[22], cards[23], cards[24]]
    ];

    return twoDim;
  }
  // pronadji slobodnu / novu poziciju za smjeska ili ljutka ako //
  // su otvoreni u kartama //
  getClickedCards() {
    let arr = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ];
    let clickedCards = Array.from(document.getElementsByClassName("clicked"));
    let faces = Array.from(document.getElementsByClassName("face"));

    // if (clickedCards.length > 0) {
    //   clickedCards.forEach(clicked => {
    //     arr.splice(clicked.id, 1);
    //   });
    // }

    if (clickedCards.length > 0) {
      faces.forEach(face => {
        console.log(face.id);
        arr = arr.filter(item => item !== parseInt(face.id));
      });
    }

    var item = arr[Math.floor(Math.random() * arr.length)];

    return item;
  }
  /// Random smješko i ljutko pozicija na početku igre//
  setRandomEmoji(cards) {
    // Inicijalna pozicija 4 smješka na početku igre //
    var arrayOfFields = Array.from(cards);
    for (let i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * arrayOfFields.length);
      let card = arrayOfFields.splice(num, 1);
      card[0].classList.add("face");
      card[0].querySelector(".poen").innerText = "😀";
    }

    /// Inicijalne pozicije 4 ljutka na početku igre //
    for (let i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * arrayOfFields.length);
      let card = arrayOfFields.splice(num, 1);
      card[0].classList.add("face");
      card[0].querySelector(".poen").innerText = "😡";
    }
  }
}
 // funkcija se izvrsava kada je ucitan DOM i dokument spreman //
function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("card"));
  let id = 0;
  let info = new MenuInfo();
  info.initInfo();

  let game = new Game(cards);
  game.reloadGame();
  // ovdje promjeniti //
  overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
      // overlay.classList.remove("visible-game");
      game.startGame();
    });
  });

  cards.forEach(card => {
    card.querySelector(".poen").innerText = game.getRandomInt(10);
    card.id = id;
    id++;

    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
  game.initCards(cards);
  game.setRandomEmoji(cards);
}
// Ako dokument nije spreman dodaj Event kada dokument bude učitan
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}
