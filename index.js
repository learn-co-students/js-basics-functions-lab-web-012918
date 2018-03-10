// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street >= 42){
    return street - 42;
  } else if (street < 42){
    return 42 - street;
  }
}

function distanceFromHqInFeet(street){
  let blocks = distanceFromHqInBlocks(street)
  return blocks * 264;
}

function distanceTravelledInFeet(start, end){
  let blocks = start > end ? start - end : end - start
  return blocks * 264;
}

function calculatesFarePrice(start, destination){
  let feet = distanceTravelledInFeet(start, destination);
  if (feet < 400){
    return 0;
  } else if (feet < 2000){
    return feet * 0.02;
  } else if (feet > 2000 && feet < 2500 ){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
