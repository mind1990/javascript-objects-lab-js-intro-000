var recipes = new Object;

function updateObjectWithKeyAndValue(object, key, value) {
  object = { [key]: value }
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, object, { [key]: value })
  return newobject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key = newobject
  return newobject
}
