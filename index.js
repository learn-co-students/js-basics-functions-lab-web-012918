// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return street > 42 ? street - 42 : 42 - street
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, current) {
  let travelled = current > start ? current - start : start - current
  return travelled * 264
}

function calculatesFarePrice(start, destination) {
  let blockDistance = start > destination ? start - destination : destination - start
  let feetDistance = blockDistance * 264
  if (feetDistance <= 400) {
    return 0
  } else if (feetDistance > 400 && feetDistance <= 2000) {
    return feetDistance * .02
  } else if (feetDistance <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
