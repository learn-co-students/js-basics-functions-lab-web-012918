// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet(beginning, destination) {
  const blocks = Math.abs(beginning - destination);
  return blocks * 264;
}

function calculatesFarePrice (beginning, destination) {
  feet = distanceTravelledInFeet(beginning, destination);

  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return feet * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
  
}
