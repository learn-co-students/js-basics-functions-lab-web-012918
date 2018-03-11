// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num-42)
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num)*264;
}

function distanceTravelledInFeet(b1, b2){
  return Math.abs((b1-b2)*264);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    // distance = distance - 400;
    return distance * 0.02;
  } else if (distance> 2000 && distance < 2500){
    return 25;
  }  else {
    return "cannot travel that far"
  }
}
