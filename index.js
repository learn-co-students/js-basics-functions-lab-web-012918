// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(blockNum) {

  return (distanceFromHqInBlocks(blockNum) * 264)
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264)
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination)
  let price;

  if (feet <= 400) {
    return price = 0;
  } else if (feet > 400 && feet <= 2000) {
    return price = feet * .02;
  } else if (feet > 2000 && feet < 2500) {
    return price = 25
  } else {
    return "cannot travel that far"
  }
}
