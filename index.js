// DATA ⤵
var phrases = {
  happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  sad: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"],
  wormy: ["Earthworms have red blood, just like humans.", "In the tropical areas of the world, some species of earthworms can reach up to 14 feet long.", "Earthworms have no ears or eyes. They do have one end of their body that is more sensitive to light than the other."],
  mindblown: ["Have you taken a pom?", "Do you need a friend in study hall?", "Thank goodness we have Monday off!"],
  studious: ["Did you read the MDN for that?", "Has anything unexpected happened in your code?", "What did you learn today?"]
}

// QUERY SELECTORS ⤵
var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var sad = document.querySelector('.crying');
var wormy = document.querySelector('.wormy');
var mindblown = document.querySelector('.mindblown');
var studious = document.querySelector('.studious');
var phrase = document.querySelector('.message');

// EVENT LISTENERS ⤵
happy.addEventListener('click', function() {
  sayThings(phrases.happy);
});
silly.addEventListener('click', function() {
  sayThings(phrases.silly);
});
sad.addEventListener('click', function() {
  sayThings(phrases.sad);
});
wormy.addEventListener('click', function() {
  sayThings(phrases.wormy);
});
mindblown.addEventListener('click', function() {
  sayThings(phrases.mindblown);
});
studious.addEventListener('click', function() {
  sayThings(phrases.studious);
});

// FUNCTIONS ⤵
function generateRandom(array) {
  var index = Math.floor(Math.random() * array.length);
  return index;
}

function sayThings(array) {
  var index = generateRandom(array);
  console.log(index);
  phrase.innerText = array[index];
}

function happyThing() {
  var index = generateRandom(phrases.happy);
  phrase.innerText = phrases.happy[index];
}

function sillyThing() {
  var index = generateRandom(phrases.silly);
  phrase.innerText = phrases.silly[index];
}

function sadThing() {
  var index = generateRandom(phrases.sad);
  phrase.innerText = phrases.sad[index];
}

function wormyThing() {
  var index = generateRandom(phrases.wormy);
  phrase.innerText = phrases.wormy[index];
}

function mindblownThing() {
  var index = generateRandom(phrases.mindblown);
  phrase.innerText = phrases.mindblown[index];
}

function studiousThing() {
  var index = generateRandom(phrases.studious)
  phrase.innerText = phrases.studious[index];
}

// Iteration 2: Level Up
// As a user, it may be a little confusing if you get the same response twice in a row (you may wonder, did that "work"?). Write your code in a way that doesn't allow a user to get a "random" answer two times a row. You may have noticed that the "example" site linked above does not have this functionality.
//
// Possible Responses
// Possible reponses for each emoji are stored in an object in your JavaScript file. Feel free to change or add to this list if you'd like!

// fact source: https://navajocodetalkers.org/38-earthworm-facts-for-kids/
