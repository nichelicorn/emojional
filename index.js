// DATA ⤵
var phrases = {
  // happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  happy: [
    {
      quote: "My God, a moment of bliss. Why, isn't that enough for a whole lifetime?",
      author: "Fyodor Dostoevsky"
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    }
  ],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  crying: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"],
  wormy: ["Earthworms have red blood, just like humans.", "In the tropical areas of the world, some species of earthworms can reach up to 14 feet long.", "Earthworms have no ears or eyes. They do have one end of their body that is more sensitive to light than the other."],
  mindblown: ["Have you taken a pom?", "Do you need a friend in study hall?", "Thank goodness we have Monday off!"],
  studious: ["Did you read the MDN for that?", "Has anything unexpected happened in your code?", "What did you learn today?"]
}

// QUERY SELECTORS ⤵
// var happy = document.querySelector('.happy');
// var silly = document.querySelector('.silly');
// var sad = document.querySelector('.crying');
// var wormy = document.querySelector('.wormy');
// var mindblown = document.querySelector('.mindblown');
// var studious = document.querySelector('.studious');
// var phrase = document.querySelector('.message');

// using a node list 
const emojis = document.querySelectorAll(".emoji");
const message = document.querySelector(".message");

emojis.forEach(emoji => {
  emoji.addEventListener("click", displayPhrase);
})

// EVENT LISTENERS ⤵
// happy.addEventListener('click', function() {
//   sayThings(phrases.happy);
// });
// silly.addEventListener('click', function() {
//   sayThings(phrases.silly);
// });
// sad.addEventListener('click', function() {
//   sayThings(phrases.sad);
// });
// wormy.addEventListener('click', function() {
//   sayThings(phrases.wormy);
// });
// mindblown.addEventListener('click', function() {
//   sayThings(phrases.mindblown);
// });
// studious.addEventListener('click', function() {
//   sayThings(phrases.studious);
// });

// happy.addEventListener("click", returnPhrase);





// FUNCTIONS ⤵
function generateRandom(array) {
  console.log("array >", array, typeof array); // array is coming through as a string!
  // console.log("array.length >", array.length);
  var index = Math.floor(Math.random() * array.length);
  return index;
}

function sayThings(array) {
  var index = generateRandom(array);
  console.log(index);
  phrase.innerText = array[index];
}

function displayPhrase(event) {
  event.preventDefault();
  // console.log("event target >", event.target);
  // console.log("event target.classList >", event.target.classList);
  const emojion = event.target.classList[1];
  console.log("emojion >", emojion, typeof emojion); // logs a string based on the class of the targeted emoji

  console.log("phrases[emojion] >", phrases[emojion]);
  
  const randomIndex = generateRandom(phrases[emojion]);

  console.log("randomIndex >", randomIndex);

  const phrase = phrases[emojion][randomIndex];

  // console.log("phrase array >", phrases[emojion]);
  // console.log("phrase >", phrase);

  if (!phrase) {
    console.log("error with the phrase")
    message.textContent = "Today is a lovely day for a walk. Take 15 minutes for yourself outside."
  } else {
    message.textContent = phrase;
  }

}