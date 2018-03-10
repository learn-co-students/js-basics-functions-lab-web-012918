// Code your solution in this file!
  function distanceFromHqInBlocks(block) {
    let distance = (block - 42)
    if (distance >= 0) {
      return distance
    } else {
      return -distance
    }
  }
  // hq on 42nd street
  function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    let feet = distance * 264
    return feet
  }

  function distanceTravelledInFeet(start, end) {
    let blocksTravelled = start - end
    if (blocksTravelled > 0) {
      return blocksTravelled * 264
    } else {
      return blocksTravelled * -264
    }
  }


  function calculatesFarePrice(start, end) {
    feetTravelled = distanceTravelledInFeet(start, end)

    if (feetTravelled > 0 && feetTravelled <= 264) {
      return 0
    } else if (feetTravelled > 400 && feetTravelled < 2000)  {
        return feetTravelled * .02
    } else if (feetTravelled > 2000 && feetTravelled < 2500) {
        return 25
    } else {
      return 'cannot travel that far'
    }
  }
