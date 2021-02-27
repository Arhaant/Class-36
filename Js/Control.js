class Control{
    constructor(){}

    readState(){
      var gameStateRef = database.ref("gamestate")
      gameStateRef.on("value",function(data){
          gameState = data.val()
      })
    }
    updateState(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    gameStart(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
}
