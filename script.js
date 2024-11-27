// STEP 1: Create an array of names
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 2: Loop over the names array
for (let i = 0; i < names.length; i++) {
  // STEP 3: Retrieve the first letter of the current name
  const firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 4: Check if the first letter is 'j'
  if (firstLetter === "j") {
    goodbyeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
