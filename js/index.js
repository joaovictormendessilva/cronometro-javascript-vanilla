document.addEventListener('submit', function(e){
    e.preventDefault();
})

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let controle = 0;

document.actions.start.onclick = () => start();
document.actions.pause.onclick = () => pause();
document.actions.reset.onclick = () => reset();

const textSeconds = document.getElementById('seconds');
const textMinutes = document.getElementById('minutes');


function contagem(){

    milliseconds += 1;

    if(milliseconds == 100){
        seconds += 1;
        milliseconds = 0;
    }
    if(seconds == 60){
        minutes += 1;
        seconds = 0;
    }

    textSeconds.innerHTML = addZero(seconds);
    textMinutes.innerHTML = addZero(minutes);

}

function start(){

    clearInterval(controle);
    controle = setInterval(contagem, 10);
}

function pause(){

    clearInterval(controle);
}

function reset(){

    seconds = 0;
    minutes = 0;
    milliseconds = 0;

    textSeconds.innerHTML = '00';
    textMinutes.innerHTML = '00';

}

function addZero(param){
    return param > 9 ? param : `0${param}`;
}

