const drawBackground = new Image();
drawBackground.src = './images/road.png';

const drawCar = new Image();
drawCar.src = './images/car.png';

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {
    myGameArea.start();
  }
};

const myGameArea = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  carPosX: 210,
  carPosY: 560,

  start: function() {
    this.ctx = this.canvas.getContext('2d')
    this.interval = setInterval(updateGameArea, 16)
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  background: function() {
    this.ctx.drawImage(drawBackground, 0, 0, this.canvas.width, this.canvas.height);
  },

  car: function () {
    this.ctx.drawImage(drawCar, this.carPosX, this.carPosY, 80, 120);
  },
}

function updateGameArea() {
  myGameArea.clear();
  myGameArea.background();
  myGameArea.car();
  
};

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      myGameArea.carPosX -= 25;
      break;
    case 'ArrowRight':
      myGameArea.carPosX += 25;
      break;
  }
});













