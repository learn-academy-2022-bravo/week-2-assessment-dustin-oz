// ASSESSMENT 2: Coding Conceptual Questions
//
// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:  [ 'B', 'r', 'a', 'v', 'o', ' ', '2', '0','2', '2']

// b) Verify and explain: I have verified this answer as correct. Since the split method breaks down an array of strings into substrings, the answer in this case will be as stated on line 13.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`

}
console.log(greeter("LEARN Student"))

// a) Your answer: This function is missing a return so this particular console log will return UNDEFINED.
// b) Verify and explain:After running this console log, I was able to verify that my answer and reasoning were correct. I then verified that placing a return on line 21 before the `Hello... ` will correct the issue.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:
// b) Verify and explain:


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// b) Verify and explain:


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// b) Verify and explain:


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
