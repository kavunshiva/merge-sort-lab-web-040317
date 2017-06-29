function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstArray, secondArray){
  let sortedArray = []
  while (firstArray.length > 0 && secondArray.length > 0){
    firstArray[0] < secondArray[0] ? sortedArray.push(findMinAndRemoveSorted(firstArray)) : sortedArray.push(findMinAndRemoveSorted(secondArray))
  }
  return sortedArray.concat(firstArray).concat(secondArray)
}

function mergeSort(array){
  let firstHalf = array.slice(0, array.length/2)
  let secondHalf = array.slice(array.length/2, array.length)

  if (array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
