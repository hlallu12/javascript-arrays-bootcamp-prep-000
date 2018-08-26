var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
} 
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
} 
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
function removeElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
