class Form{
    constructor(){}
    display(){
        var title = createElement("h2")
        title.html("Car racing game")
        title.position(550,150)
        var inputName = createInput("Name")
        var goButton = createButton("Go")
        inputName.position(500,250)
        goButton.position(500,300)
        goButton.mousePressed(function(){
            inputName.hide()
            goButton.hide()
            var name = inputName.value()
            playerCount += 1
            var greetings = createElement("h3")
            greetings.html("Hello "+ name)
            greetings.position(500,250)

            player.countUpdate(playerCount)
            player.nameUpdate(name)
        })
    }
}