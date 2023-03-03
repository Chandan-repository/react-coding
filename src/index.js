function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  return numberArray.map((num) => {
    let obj = { val: num };

    return obj;
  });
}

transformToObjects([1, 2, 3]);
