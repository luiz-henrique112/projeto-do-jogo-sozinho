class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide()
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      if (this.input.value()) {
        
      
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere o outro jogador entrar...` 
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);}
      else{this.greeting.html("Quem é você? Qual o seu nome?")
    this.greeting.position(width / 2 - 300, height / 2 +100)}
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
