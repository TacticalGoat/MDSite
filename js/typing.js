var app = document.getElementById('element');

var typewriter = new Typewriter(app, {
    loop: true , 
    typingSpeed : 40,
    deleteSpeed : 17
});

typewriter.typeString("Hello there")
    .pauseFor(500)
    .typeString(" , Trader ! ")
    .pauseFor(300)
    .typeString(".")
    .pauseFor(400)
    .typeString(".")
     .pauseFor(400)
    .typeString(".")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Are you looking for a Programmer ?")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Well ,")
    .pauseFor(700)
    .typeString("you're in luck ")
    .pauseFor(700)
    .typeString(".")
    .pauseFor(400)
    .typeString(".")
    .pauseFor(400)
    .typeString(".")
    .pauseFor(700)
    .typeString("!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("QuantMan")
    .pauseFor(1000)
    .typeString(" = Trader")
    .pauseFor(1500)
    .typeString(" + Coder ")
    .pauseFor(3000)
    .typeString(";")
    .pauseFor(5000)
    .start();