// Code your solution in this file!
function calculateVertical(beg, dest){
  return (dest-beg)*264
}

function distanceFromHqInBlocks(dest){
  return Math.abs(dest-42)
}

function distanceFromHqInFeet(dest){
  return distanceFromHqInBlocks(dest) * 264
}

function distanceTravelledInFeet(start, end){
  return Math.abs((end-start)*264)
}

function calculatesFarePrice(start, dest){
  let travel = (Math.abs(start-dest))*264;
  if (travel > 2500) {
    return 'cannot travel that far';
  } else if (travel <=400) {
    return 0;
  } else if (travel <=2500 & travel >=2000){
    return 25;
  } else {
    return (travel)*.02
  }
}
