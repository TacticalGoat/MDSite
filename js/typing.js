var app = document.getElementById('element');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello I am QuantMan')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I really should change the name')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am also an asshole.')
    .start();