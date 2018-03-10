// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
};

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start,destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start,destination)
  if ( feetTraveled <= 400) {
    return 0
  } else if ( feetTraveled > 400 && feetTraveled <= 2000) {
    return feetTraveled * 0.02
  } else if ( feetTraveled > 2000 && feetTraveled < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
