// // SETTING IMPORTANT VARIABLES
var Pos = 10;
var newPos = 10;

// CONTROLS FOR UP
// ALSO ADDED A BORDER THAT THE BALL CAN'T GO THROUGH
function mvUp(){
  newPos += Math.floor(Math.random() * 1 - 10);
  document.getElementById('y').innerHTML = "y:" + newPos;
  if ( newPos <= 0 ) {
    newPos = 10
  }
  document.getElementById('ball').style.top = newPos + 'px';
}

// CONTROLS FOR DOWN
// ALSO ADDED A BORDER THAT THE BALL CAN'T GO THROUGH
function mvDown(){
  newPos += Math.floor(Math.random() * 1 + 10);
  document.getElementById('y').innerHTML = "y:" + newPos;
  if ( newPos >= 460 ){
    newPos = 450
  }
  document.getElementById('ball').style.top = newPos + 'px';

}
// CHANGED THE LEFT CONTROLS TO BE LESS BLOATED AND MORE SIMPLE
// ALSO ADDED A BORDER THAT THE BALL CAN'T GO THROUGH
function mvLeft() {
  Pos += Math.floor(Math.random() * 1 - 10);
  document.getElementById('x').innerHTML = "x:" + Pos;
  document.getElementById('ball').style.left = Pos + 'px';
  if ( Pos <= 10 ) {
    Pos = 10
  }
}
// CHANGED THE RIGHT CONTROLS TO BE LESS BLOATED AND MORE SIMPLE
// ALSO ADDED A BORDER THAT THE BALL CAN'T GO THROUGH
function mvRight() {
  Pos += Math.floor(Math.random() * 1 + 10);
  document.getElementById('x').innerHTML = "x:" + Pos;
  document.getElementById('ball').style.left = Pos + 'px';
  if ( Pos >= 930 ) {
    Pos = 930
  }
}

// THIS CHANGES THE COLOR OF THE BALL
// CHOSE BLUE, RED, AND YELLOW BECAUSE THEY ARE THE 3 PRIMARY COLORS.
var colorType = 0;
function transform() {
  colorType += Math.floor(Math.random() * 1 + 1);
  if ( colorType <= 1 ) {
    document.getElementById('ball').style.backgroundColor = "#ff0000";
  }
  else {
    if ( colorType >= 2){
    document.getElementById('ball').style.backgroundColor = "#ffff00";
    if ( colorType >= 3) {
      colorType = 0;
      document.getElementById('ball').style.backgroundColor = "#0000ff"
    }
    }
  }
}