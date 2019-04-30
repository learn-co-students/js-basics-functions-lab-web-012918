// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  if (blocks > 42) {
    const distance = blocks - 42
    return distance
  } else if (blocks < 42) {
    const distance = 42 - blocks
    return distance
  }
}

function distanceFromHqInFeet (blocks) {
  return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock > endingBlock) {
    const distance = startingBlock - endingBlock
    return (distance * 264)
  } else if (startingBlock < endingBlock) {
    const distance = endingBlock - startingBlock
    return (distance * 264)
  }
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const distance = distanceTravelledInFeet(startingBlock, endingBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (distance >= 2000) {
    return 25
  } else if (distance >= 400) {
    return (distance * .02)
  }
}
