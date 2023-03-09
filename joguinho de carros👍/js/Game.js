class Game {
  constructor() {

this.sorteButton = createButton("reset")

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 100,height - 100)
      car1.addImage(car1_img)
      car1.scale = 0.1

      car2 = createSprite(width / 2 + 100,height - 100)
      car2.addImage(car2_img)
      car2.scale = 0.1

      cars = [car1,car2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

updateGS(count) {

  database.ref("/").update({
    gameState: count
  });

}

  play() {
    form.hide()

Player.getPlayersInfo()
player.recuperacao()
this.sorteButton.position(50,50)
this.sorteButton.class("customButton")
this.sorteButton.mousePressed(() => {

database.ref("/").set({

gameState : 0,
playerCount : 0,
contador : 0,
players : {},
ranking : 0


})

window.location.reload()

})

if (ip !== undefined) {
  


image(track,0,- height * 5,width,height *6)

var raioMcqueen = 0

for (var i in ip) {
  
  raioMcqueen += 1
  var x  = ip[i].positionX
  var y  = height - ip[i].positionY

  cars[raioMcqueen - 1].position.x = x
  cars[raioMcqueen - 1].position.y = y

  if (raioMcqueen == player.index) {
    
 camera.position.y = cars[raioMcqueen - 1].position.y

  }
}

this.oqOReiJulienFaz()

const fim = height*6 - 100
  if (player.positionY > fim) {
    
gameState = 2
player.rank += 1
player.boletim(player.rank)
player.atuXY()
this.colocados()

  }

drawSprites()}
  }
colocados(){

swal({

  title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
  text: "Você alcançou a linha de chegada com sucesso!",
  imageUrl:
    "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
  imageSize: "100x100",
  confirmButtonText: "Ok"

})
  
}


oqOReiJulienFaz(){

if (keyDown(UP_ARROW)) {

  player.positionY += 10
  player.atuXY()
  
}

if (keyDown(RIGHT_ARROW )&& player.positionX < width / 2 + 260) {

  player.positionX += 10
  player.atuXY()
  
}

if (keyDown(LEFT_ARROW) && player.positionX > width / 2 - 280) {

  player.positionX -= 10
  player.atuXY()
  
}

if (keyDown(DOWN_ARROW)) {

  player.positionY -= 10
  player.atuXY()
  
}

}

}


