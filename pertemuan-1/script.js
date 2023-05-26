// console.log("Hello World!");

// // Anonymous function

// // Anonymous function assigned to variable
// let fungsi = function(name) {
//     console.log("My Name is " + name);
// }

// fungsi("Faisal");
// // Output
// // My Name is Faisal

// // Anonymous function as an argument
// const someFunction = (function() {
//     console.log("This is Anonymous function");
// })

// someFunction();
// // Output
// // This is Anonymous function

// let sum = (num1, num2, sum) => {
//     let result = sum(num1, num2);
//     console.log("The result of " + num1 + " + " + num2 + " is " + result);
// }

// sum(3, 4, function(x, y) {
//     return x + y
// })

// // Output
// // The result of 3 + 4 is 7

// let names = ["Ahmad", "Faisal", "Hidayat"]

// let name = names.forEach((name) => console.log(name))
// // Output
// // Ahmad
// // Faisal
// // Hidayat

// // Arrow Function

// // Arrow Function with parentheses (for multiple parameters)
// let myFunction = (a, b) => {
//     return a + b
// }

// console.log(myFunction(5, 3))
// // Output
// // 8

// // Arrow Function with single parameter
// let myFunction2 = num => {
//     return num * num
// }

// console.log(myFunction2(5))
// // Output
// // 25

// // Arrow Function with Implicit Return (single expression)
// let myFunction3 = (a, b) => a * b

// console.log(myFunction3(5, 3))
// // Output
// // 15

// // Arrow Function with Implicit Return (Object Literal)
// let createPerson = (name, age) => ({ name, age })

// console.log(createPerson("Faisal", 19))
// // Output
// // { name: "Faisal", age: 19 }

// // Callback Function

// // Callback Function Sederhana
// function greeting(name, callback) {
//     console.log("Hello, My Name is " + name)
//     callback()
// }

// function sayGoodbye() {
//     console.log("Goodbye!")
// }

// greeting("Faisal", sayGoodbye)
// // Output
// // Hello, My Name is Faisal
// // Goodbye!

// // Callback Function dalam Asynchronous Function
// function fetchData(callback) {
//     setTimeout(function() {
//         let data = "Data has been fetched"
//         callback(data)
//     }, 2000)
// }

// function displayData(data) {
//     console.log(data)
// }

// fetchData(displayData)
// // Output
// // Data has been fetched

// // Menggunakan Anonymous Function sebagai Callback Function
// function processArray(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i])
//     }
// }

// let numbers = [1, 2, 3]

// processArray(numbers, (numbers) => {
//     console.log(numbers)
// })
// // Output
// // 1
// // 2
// // 3

// // Callback Function sebagai Error Handling
// const fetchData2 = (callback, errorCallback) => {
//     // Simulate an error
//     let error = true;

//     if (error) {
//         errorCallback("Error fetching data.")
//     } else {
//         let data = "Data has been fetched"
//         callback(data)
//     }
// }

// const displayData2 = (data) => {
//     console.log(data)
// }

// const displayError = (error) => {
//     console.log("Error: " + error)
// }

// fetchData2(displayData2, displayError)
// // Output
// // Error fetching data

// Rest Parameter (...)

// Penggunaan Rest Parameter
// const sum = (...numbers) => {
//     let total = 0

//     for (let number of numbers) {
//         total += number
//     }

//     return total
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7))
// // Output
// // 28

// // Rest parameter dengan parameter lain
// const multiply = (multiplier, ...numbers) => {
//     let result = numbers.map((number) => number * multiplier)
//     return result
// }

// console.log(multiply(2, 1, 2, 3, 4, 5))
// // Output
// // [2, 4, 6, 8, 10]

// Rest Parameter dengan Destructuring
// const getFullName = (first, last, ...middle) => {
//     console.log("First Name: " + first)
//     console.log("Last Name: " + last)
//     console.log("Middle Names: " + middle.join(", "))
// }

// getFullName("John", "Doe", "Adam", "Michael", "Smith")
// // Output
// // First Name: John
// // Last Name: Doe
// // Middle Names: Adam, Michael, Smith

// Optional Chaining

// Akses properti dengan Optional Chaining
// let person = {
//     name: "Faisal",
//     age: "19",
//     address: {
//         city: "Tangerang",
//         country: "Indonesia"
//     },
// }

// console.log(person.address?.city)
// console.log(person.address?.region)
// // Output
// // Tangerang
// // Undefined

// // Akses method dengan Optional Chaining
// let person2 = {
//     name: "Faisal",
//     age: "19",
//     sayHello: function () {
//         console.log(`Hi, My name is ${this.name}, I am ${this.age} years old`)
//     }
// }

// console.log(person2.sayHello?.())
// console.log(person2.sayGoodbye?.())
// // Output
// // Hi, My name is Faisal, I am 19 years old
// // Undefined

// // Optional Chaining dengan array
// let numbers = [1, 2, 3, 4, 5]

// console.log(numbers?.[2])
// console.log(numbers?.[10])
// // Output
// // 3
// // undefined

// Method forEach()

// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach((number) => {
//     console.log(number)
// })
// // Output
// // 1
// // 2
// // 3
// // 4
// // 5

// // Another method forEach() with array
// let fruits = ["Banana", "Orange", "Mango"]

// fruits.forEach((fruit, index, array) => {
//     console.log(`Fruit : ${fruit}`)
//     console.log(`Index : ${index}`)
//     console.log(`Array : ${array}`)
// })
// // Output
// // Fruit : Banana
// // Index : 0
// // Array : Banana, Orange, Mango
// // ...

// Method map()

// let numbers = [1, 2, 3, 4, 5]

// let squaredNumbers = numbers.map((number) => number * number)
// console.log(squaredNumbers)
// // Output
// // [1, 4, 9, 16, 25]

// let names = ["Faisal", "Nanda", "Ali"]

// let upperNames = names.map((name) => name.toUpperCase())
// console.log(upperNames)
// // Output
// // ['FAISAL', 'NANDA', 'ALI']

// Method filter()

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let oddNumbers = numbers.filter((number) => number % 2 == 1)
// console.log(oddNumbers)
// // Output
// // [1, 3, 5, 7]

// let person = ["Faisal", "Anggi", "Achmad"]

// let saram = person.filter((saram) => saram.length < 6)
// console.log(saram)
// // Output
// // ['Anggi']

// Method find()

// let numbers = [1, 2, 3, 4, 5]

// let evenNumber = numbers.find((number) => number % 2 === 0)
// console.log(evenNumber)
// // Output
// // 2

// let persons = ["Faisal", "Anggi", "Achmad"]

// let saram = persons.find((person) => person === "Faisal")
// console.log(saram)
// // Output
// // ['Faisal']

// Method reduce()

// let numbers = [1, 2, 3, 4, 5]

// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum)
// // Output
// // 15

// let persons = ["Faisal", "Anggi", "Achmad"]

// let combine = persons.reduce((accumulator, currentValue) => accumulator + " " + currentValue)
// console.log(combine)
// // Output
// // Faisal Anggi Achmad

// Destructuring Assignment

// Destructuring pada array
// let numbers = [7, 6, 2003]

// let [date, month, year] = numbers
// console.log("Tanggal lahir saya " + date + "-" + month + "-" + year)
// // Output Tanggal lahir saya 7-6-2003

// Destructuring pada Object
// let person = {
//     nama: "Ahmad Faisal Hidayat",
//     nim: "02042111003",
//     email: "ahmadfaisalhidayat127@gmail.com"
// }

// let {nama, nim, email} = person
// console.log("Nama       : " + nama)
// console.log("NIM        : " + nim)
// console.log("Email      : " + email)
// // Output
// // Nama     : Ahmad Faisal Hidayat
// // NIM      : 02042111003
// // Email    : ahmadfaisalhidayat127@gmail.com

// Destructuring dengan Default Value
// let numbers = [1]

// let [number1, number2 = 2] = numbers
// console.log(number1)
// console.log(number2)
// // Output
// // 1
// // 2

// Rest Property/Element

// Rest Property pada Object
// let person = {
//     nama: "Ahmad Faisal Hidayat",
//     nim: "02042111003",
//     email: "ahmadfaisalhidayat127@gmail.com",
//     age: 19,
//     ttl: "Tangerang, 07 Juni 2003",
//     gender: "Man"
// }

// let {nama, nim, email, ...detail} = person
// console.log(nama)
// console.log(nim)
// console.log(email)
// console.log(detail)
// // Output
// // Ahmad Faisal Hidayat
// // 0204211003
// // ahmadfaisalhidayat127@gmail.com
// // {age: 19, ttl: "Tangerang, 07 Juni 2003", gender: "Man"}

// // Rest Element pada Array
// let numbers = [1, 2, 3, 4, 5]

// let [number1, number2, ...rest] = numbers
// console.log(number1)
// console.log(number2)
// console.log(rest)
// // Output
// // 1
// // 2
// // [3, 4, 5]

// Spread (...)

// Spread pada Array
let numbers = [1, 2, 3]

let newNumbers = [...numbers, 4, 5]
console.log(newNumbers)
// Output
// [1, 2, 3, 4, 5]

// Spread pada String
let str = "Hello"

let characters = [...str]

console.log(characters)
// Output
// ['H', 'e', 'l', 'l', 'o']

let object1 = { name: "Ahmad Faisal Hidayat" }
let object2 = { nim: "02042111003" }

let combine = {...object1, ...object2}
console.log(combine)
// Output
// { name: "Ahmad Faisal Hidayat", nim: "02042111003" }