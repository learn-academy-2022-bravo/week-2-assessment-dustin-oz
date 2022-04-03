// ASSESSMENT 2: Coding Conceptual Questions
//
// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:  ['B', 'r', 'a', 'v', 'o', ' ', '2', '0','2', '2']

// b) Verify and explain: I have verified this answer as correct. Since the split method breaks down an array of strings into substrings, the answer in this case will be as stated on line 13.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`

}
// console.log(greeter("LEARN Student"))

// a) Your answer: This function is missing a return so this particular console log will return UNDEFINED.

// b) Verify and explain:After running this console log, I was able to verify that my answer and reasoning were correct. I then verified that placing a return on line 21 before the `Hello... ` will correct the issue.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]

// b) Verify and explain: I have verified my answer as correct. In this case, we have an array having each of its values being mapped over and each value is multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: I have verified my answer as correct. In this case, we have an array having each of its values being filtered over with simple arithmatic. It divides each value in the arry by 2. If there is a remainder left over, it logs it since it is an odd number and fulfills the objectiove of this code.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Verified correct. The reason it logs JavaScript in this case is because we first pass in the object on the page (myCodingSkills) and then using dot notation we tap into the language value and at this point, we simply access any point in the array like normal, with the index.. which starts at zero of course for the first word and so on.


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

// a) Your answer: {student:'George',cohort:'Bravo',year: 2022}
// b) Verify and explain: I have verified that my answe is correct. In this case, we have a properly written javascript class with a constructor taking in a name as well as two hard coded values in the cohort and year positions respectively. After instantiation, we see that we have created a single instance of Learn via the learnStudent variable and once logged, we simply get back the class with the name filled in since it was passed in during instantiation.
