function triangleTracker() {
  var sideOne = document.getElementById('sideOne').value;
  var sideTwo = document.getElementById('sideTwo').value;
  var sideThree = document.getElementById('sideThree').value;
  if (sideOne === sideTwo && sideOne === sideThree) {
    alert("equilateral triangle");
  } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
    alert("Isosceles triangle")
  } else if (sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideOne > sideOne) {
    alert("Scalene triangle")
  } else {
    alert("Not a triangle");
  }
}
