const recipes = {};

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]:v});
}