const cloneArray = require("./cloneArray");

test("Properly clones the array ", () => {
  //   expect(cloneArray([1, 2, 3])).toBe([1, 2, 3]);
  // this line will give us the error as both are having same element
  // but they are located at the different memory location
  // so we need to add the toEqual to have the same element matching

  expect(cloneArray([2, 3, 4])).not.toBe([2, 3, 4]);
  expect(cloneArray([1, 2, 3])).toEqual([1, 2, 4]);
});
