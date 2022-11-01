function distanceFromHqInBlocks (someValue) {
    if (someValue<42){
      return(42-someValue);
    }
    else {
  
    return(someValue-42)
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, dest) {
    if (start > dest) {
      let distance = start - dest; 
      return distance * 264;
    }
    else if (start < dest) {
      let distance = dest - start; 
      return distance * 264;
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    const dist = distance - 400;
    if (distance < 400){
        return 0
    }
    else if (distance > 400 && distance < 2000){
        return dist * 0.02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25; 
    }
    else {
         return "cannot travel that far"; 
    }   
}