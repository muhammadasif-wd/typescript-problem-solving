// Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

const numbersArrayForConvert = [1, 4, 3, 2, 6]
const stringArrayForConvert = ["Apple", "Ball", "Cat", "Doll", "Eggs"]
const booleanArrayForConvert = [true, false]

const reverseArray = (converter: any[]): any => {
  const arrayConvert = converter.reverse()
  return arrayConvert
}

console.log(reverseArray(numbersArrayForConvert))
