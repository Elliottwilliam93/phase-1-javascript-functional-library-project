function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  }
  else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    }
    else {
      for (let key in collection) {
        newArray.push(callback(collection[key]));
      }
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let copy;
    if (Array.isArray(collection)) {
      copy = collection.slice();
    } else {
      copy = Object.assign({}, collection);
    }
    
    if (acc === undefined) {
      acc = copy.shift();
    }
    
    if (Array.isArray(copy)) {
      for (let i = 0; i < copy.length; i++) {
        acc = callback(acc, copy[i], collection);
      }
    }
    else {
      for (let key in copy) {
        acc = callback(acc, copy[key], collection);
      }
    }
    return acc;
}

function myFind(collection, predict) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predict(collection[i])) {
          return collection[i];
        }
      }
    }
    else {
      for (let key in collection) {
        if (predict(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const filtered = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filtered.push(collection[i]);
        }
      }
      return filtered;
    }
    else {
      const filtered = {};
      for (let key in collection) {
        if (predicate(collection[key])) {
          filtered[key] = collection[key];
        }
      }
      return filtered;
    }
}

function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    }
    else {
      return Object.keys(collection).length;
    }
}

function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    else {
      return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
}