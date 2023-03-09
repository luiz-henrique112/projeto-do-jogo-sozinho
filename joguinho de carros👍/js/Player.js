class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank  = 0
    this.trocado = 0
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank : this.rank,
      trocado : this.trocado
    });
  }

boletim(count){

database.ref("/").update({

ranking : count

})

}

recuperacao(){

var recuperacao2 = database.ref("ranking")
recuperacao2.on("value", data => {
  this.rank = data.val()
})

}

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  atuXY(){

  database.ref("players/player" + this.index).update({

 positionX : this.positionX,
 positionY : this.positionY,
 rank : this.rank,
 trocado : this.trocado

  });

  }

  static getPlayersInfo() {

var ip2 = database.ref("players")
ip2.on("value", data => {

ip = data.val()

})

  }
}
