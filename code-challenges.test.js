// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.





// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("threeChecker", () => {
//     it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
//         expect(threeChecker(num1)).toEqual("15 is divisible by three")
//         expect(threeChecker(num2)).toEqual("0 is divisible by three")
//         expect(threeChecker(num3)).toEqual("-7 is not divisible by three")
//     })
// })

        // ----- OUTPUT -----
        // JEST test returns the proper error. - Function veriified

        // threeChecker
        //     ✕ takes a number as an argument and decides if the number is evenly divisble by three or not(1 ms)

        //   ● threeChecker › takes a number as an argument and decides if the number is evenly divisble by three or not

        // ReferenceError: threeChecker is not defined <----- <----- <----- <-----

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

        // ----- // PSEUDO CODE:
        // Create a function named threeChecker that takes in a parameter called number
        // Conditionally check whether a given number is divisible by 3
        // Return IF the number is divisible by three ELSE return that it is not.

const threeChecker = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// console.log(threeChecker(num1))
// console.log(threeChecker(num2))
// console.log(threeChecker(num3))

        // PASS./ code - challenges.test.js
        // threeChecker
        //     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not(4 ms)





// --------------------2) Create a function that takes in an array of words and returns an array with all the words first letters capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capitalizeLetter", () => {
//     it("returns an array with all the words first letters capitalized", () => {
//         expect(capitalizeLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capitalizeLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
// })

        // ----- OUTPUT -----
        // capitalizeLetter
        //     ✕ returns eat food or keep working based on input(1 ms)

        //   ● capitalizeLetter › returns eat food or keep working based on input

        // ReferenceError: capitalizeLetter is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

        // ----- // PSEUDO CODE:
        // Create a function called capitalizeLetter that takes in an array called wordsArray
        // Map over each word in the array
        // Return the value at the 0 position in each word use the toUpperCase to capitalize it
        // then + the above line to the value of the rest of the string using the sustring method.

const capitalizeLetter = (wordsArray) => {
    return wordsArray.map(value => value[0].toUpperCase() + value.substring(1))
}

// console.log(capitalizeLetter(randomNouns1))
// console.log(capitalizeLetter(randomNouns2))

        // PASS./ code - challenges.test.js
        // capitalizeLetter
        //     ✓ returns eat food or keep working based on input(3 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelFinder", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelFinder(vowelTester1)).toEqual(1)
        expect(vowelFinder(vowelTester2)).toEqual(0)
        expect(vowelFinder(vowelTester3)).toEqual(2)
    })
})
        // ----- OUTPUT -----
        // vowelFinder
        //     ✕ takes in a string and logs the index of the first vowel(1 ms)

        //   ● vowelFinder › takes in a string and logs the index of the first vowel

        // ReferenceError: vowelFinder is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
