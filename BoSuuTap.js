var isRunning = false;
var idImage = 0;
var runImageInterval;

function setImg() {
    document.getElementById('img').src = `images/${idImage}.PNG`
    document.getElementById('number').innerHTML = `${idImage+1}/5`
}

function run() {
    if (idImage < 4) {
        idImage++;
    } else {
        idImage = 0
    }
    setImg();
}

function clickStart() {
    runImageInterval = setInterval(run, 1500);
}

function clickStop() {
    clearInterval(runImageInterval);
}

function clickNext() {
    if (idImage >= 4) {
        idImage = 0;
    } else {
        idImage++;
    }
    setImg();
}

function clickFirst() {
    idImage = 0;
    setImg();
}

function clickLast() {
    idImage = 4;
    setImg();
}

function clickPrevius() {
    if (idImage <= 0) {
        idImage = 4;
    } else {
        idImage--;
    }
    setImg();
}

