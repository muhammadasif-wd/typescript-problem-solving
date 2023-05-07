// Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.
const calculateArea = (length: number, width: number): number => {
  const result = length * width
  console.log(`The of the rectangle`, result)
  return result
}
calculateArea(2, 4)
