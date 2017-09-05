var recipes = { key: 'value'}

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
  Object.assign({}, object, { [key]})
  delete object.key
  return object.key
}


function destructivelyDeleteFromObjectByKey(object, key) {
  var newobject = delete object.key
  return newobject
}
