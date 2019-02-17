function triangleTracker() {
  var sideOne = parseInt(document.getElementById('sideOne').value);
  var sideTwo = parseInt(document.getElementById('sideTwo').value);
  var sideThree = parseInt(document.getElementById('sideThree').value);

  var side = [sideOne, sideTwo, sideThree];

  if (side[0] + side[1] <= side[2] || side[0] + side[2] <= side[1] || side[2] + side[1] <= side[0]) {
    alert("this cannot form a triangle");
    answer.innerhtml = 'this cannot form a triangle'
  }else if (side[0] === side[1] && side[0] === side[2]) {
    alert("equilateral triangle");
  } else if (side[0] === side[1] || side[0] === side[2] || side[1] === side[2]) {
    alert("Isosceles triangle")
  } else if (side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[1] + side[2] > side[0]) {
    alert("Scalene triangle")
  } else {
    alert("Not a triangle");
  }
}
