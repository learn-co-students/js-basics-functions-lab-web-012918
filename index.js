// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
  } else if (location < 42) {
    return 42 - location;
  } else {
    return 0;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet( pick, drop ) {
  return Math.abs( ( pick - drop ) * 264 );
}

function calculatesFarePrice(pick, drop)  {
  const feet = ( distanceTravelledInFeet( pick, drop ) );
  if ( feet <= 264 ) { return 0; }
  else if ( feet <= 2500 ) {
    if ( feet >= 400 && feet <= 2000 ) {
      return feet * .02;
    } else {
      return 25;
    }
  } else {
    return "cannot travel that far";
  }
}
