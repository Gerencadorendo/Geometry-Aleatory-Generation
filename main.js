x = 0;
y = 0;
desenharCirculo = "";
desenharRetangulo = "";
desenharQuadrado = "";
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
conteudo = ""




function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(desenharCirculo == true){
        radius=Math.random()*60;
        circle(x, y, radius)
        document.getElementById("status").innerHTML = "O círculo foi desenhado"
        desenharCirculo=false
    }
    if(desenharRetangulo == true){
        radius=random(40, 100)
        radis=random(30, 90)
        rect(x, y, radius, radis)
        document.getElementById("status").innerHTML = "O retângulo foi desenhado"
        desenharRetangulo=false
    }
    if(desenharQuadrado == true){
        radius=random(40, 100)
        rect(x, y, radius, radius)
        document.getElementById("status").innerHTML = "O quadrado foi desenhado"
        desenharQuadrado=false
    }

}
function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo: Pode Falar";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)
    conteudo = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = conteudo;

    if(conteudo == "círculo"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Desenhando um circulo"
        desenharCirculo=true
    }
    if(conteudo == "retângulo"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo"
        desenharRetangulo=true
    }
    if(conteudo == "quadrado"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Desenhando um quadrado"
        desenharQuadrado=true
    }
    
}