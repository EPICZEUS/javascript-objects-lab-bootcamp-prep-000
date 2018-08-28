const recipes = {};

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]:v});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
}

function deleteFromObjectByKey(obj, k) {
  const newObj = Object.assign({}, obj);
  delete newObj[k];
  return newObj;
}