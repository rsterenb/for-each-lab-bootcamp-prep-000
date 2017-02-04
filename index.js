function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var cats = ['Momo', 'Scotch', 'Sidney'];
  cats.forEach(callback);
  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}
