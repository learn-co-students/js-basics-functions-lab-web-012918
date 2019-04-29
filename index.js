// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if(location > 42){
    return location - 42;
  }
  else{
    return 42 - location;
  }
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(num1, num2){
  if(num1 > num2){
    const distance = num1 - num2
    return distance * 264
  }
  else {
    const distance = num2 - num1
    return distance * 264
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  if(distance < 2500){
    if(distance < 400){
      return 0
    }
    else if(distance > 2000){
      return 25
    }
    else{
      return distance *.02
    }
  }
  else{
    return 'cannot travel that far'
  }
}
