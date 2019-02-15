function triangleTracker() {
  var sideOne = document.getElementById('sideOne').value;
  var sideTwo = document.getElementById('sideTwo').value;
  var sideThree = document.getElementById('sideThree').value;
  var equip = sideOne + sideTwo + sideThree;
  if (sideOne = sideTwo && sideOne = sideThree) {
    alert("equilateral triangle");
  } else {
    alert("not a triangle");
  }
}
