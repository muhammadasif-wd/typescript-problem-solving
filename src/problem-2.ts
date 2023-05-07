// Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person {
  name: string
  age: number
  email: string
}

const user: Person = {
  name: "asif",
  age: 23,
  email: "muhammadasif.wd@gmail.com",
}
console.log(`User Name: ${user.name}`)
console.log(`User Age: ${user.age}`)
console.log(`User Email: ${user.email}`)
