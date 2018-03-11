// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}
function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet (startingPoint, endingPoint) {
  if (startingPoint > endingPoint) {
    return (startingPoint - endingPoint) * 264
  } else {
    return (endingPoint - startingPoint) * 264
  }
}

function calculatesFarePrice (start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet < 400) {
    return 0;
  } else if (distanceInFeet < 2001) {
    return distanceInFeet * .02;
  } else if (distanceInFeet < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
