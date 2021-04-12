// Code your solution in this file!

function calculateVertical(start, end) {
  return Math.floor((start - end) * 264);
}


function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
};

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
};

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264;
    // Return the distance in feet
  } else {
    return (start - end) * 264;
  }
};

function calculatesFarePrice(start, end) {
  const total = distanceTravelledInFeet(start, end);

    if (total <= 400) {
      return 0;
    } else if (total <= 2000) {
      return  .02 * total;
    } else if (total >= 2500) {
      return 'cannot travel that far';
    } else if (total > 2000){
      return 25;
    }
}
