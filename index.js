// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  let dist = Math.abs(start - end);
  return dist * 264
}

function calculatesFarePrice(start, end) {
  let dist = distanceTravelledInFeet(start, end)

  switch (true) {
    case dist <= 400 :
      return 0;
    case dist > 400 && dist < 2000 :
      return (0.02 * dist);
    case dist > 2000 && dist < 2500 :
      return 25;
    default:
      return 'cannot travel that far';
  }
}
