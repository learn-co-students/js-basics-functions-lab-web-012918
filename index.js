// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  if (dist > 42){
    return dist - 42
  }else if (dist < 42){
    return 42 - dist
  }
}

function distanceFromHqInFeet(dist){
  return distanceFromHqInBlocks(dist) * 264;
}

function distanceTravelledInBlocks(start, end){
  if (start > end){
    return start - end
  } else if (start < end){
    return end - start
  }
}

function distanceTravelledInFeet(start, end) {
  return distanceTravelledInBlocks(start, end) * 264
}

function calculatesFarePrice(start, end){
  if (distanceTravelledInFeet(start, end) < 400) {
    return 0
  } else if (distanceTravelledInFeet(start, end) > 2500) {
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500){
    return 25
  } else if (distanceTravelledInFeet(start, end) <= 2000 && distanceTravelledInFeet(start, end) >= 400){
    return distanceTravelledInFeet(start, end) * .02
  }

}
