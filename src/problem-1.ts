// Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

// create a array =[1,2,3,4]

const sumNumbersOfArray = [1, 3, 5, 6, 8, 9]

// process 1
const addSum1 = (addSumNumbers1: number[]): number =>
  addSumNumbers1.reduce((prev, next) => prev + next, 0)

const addArrayNumberValue = addSum1(sumNumbersOfArray)
console.log("Your number array total sum:", addArrayNumberValue)

// process 2
const addSum2 = (addSumNumbers2: number[]): number => {
  let total = 0
  for (let addNumber of addSumNumbers2) {
    total += addNumber
  }
  return total
}
console.log("process 2 number of array total sum:", addSum2(sumNumbersOfArray))

// process 3

const addSum3 = (addSumNumbers3: number[]): number => {
  let total = 0
  for (let i = 0; i < addSumNumbers3.length; i += 1) {
    total += addSumNumbers3[i]
  }
  return total
}
console.log("process 2 number of array total sum:", addSum3(sumNumbersOfArray))
