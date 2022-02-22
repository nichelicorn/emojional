// 💾 Application state
var phrases = {
  // happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  happy: [
    {
      quote: "My God, a moment of bliss. Why, isn't that enough for a whole lifetime?",
      author: "Fyodor Dostoevsky"
    },
    {
      quote: "You cannot protect yourself from sadness without protecting yourself from happiness.",
      author: "Jonathan Safran Foer"
    },
    {
      quote: "We all live with the objective of being happy; our lives are all different and yet the same.",
      author: "Anne Frank"
    },
    {
      quote: "Just because you are happy it does not mean that the day is perfect but that you have looked beyond its imperfections.",
      author: "Bob Marley"
    },
    {
      quote: "The trouble is that we have a bad habit, encouraged by pedants and sophisticates, of considering happiness as something rather stupid. Only pain is intellectual, only evil interesting. This is the treason of the artist; a refusal to admit the banality of evil and the terrible boredom of pain.",
      author: "Ursula K LeGuin"
    }
  ],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  crying: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"],
  wormy: ["Earthworms have red blood, just like humans.", "In the tropical areas of the world, some species of earthworms can reach up to 14 feet long.", "Earthworms have no ears or eyes. They do have one end of their body that is more sensitive to light than the other."],
  mindblown: ["Have you taken a pom?", "Do you need a friend in study hall?", "Thank goodness we have Monday off!"],
  studious: ["Did you read the MDN for that?", "Has anything unexpected happened in your code?", "What did you learn today?"]
}

// 🔎 Query selectors
// select the node list of emojis
const emojis = document.querySelectorAll(".emoji");
const message = document.querySelector(".message");

// 🎧 Event listeners
emojis.forEach(emoji => {
  emoji.addEventListener("click", displayPhrase);
});

// FUNCTIONS ⤵
function generateRandom(array) {
  // console.log("array >", array, typeof array); // array is coming through as a string!
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
  // console.log("emojion >", emojion, typeof emojion); // logs a string based on the class of the targeted emoji

  console.log("phrases[emojion] >", phrases[emojion]);

  const randomIndex = generateRandom(phrases[emojion]);

  console.log("randomIndex >", randomIndex);

  // when the phrase is a string in an array
  // const phrase = phrases[emojion][randomIndex];

  // when the phrase is an object
  const phrase = phrases[emojion][randomIndex];

  // console.log("phrase array >", phrases[emojion]);
  // console.log("phrase >", phrase);
  console.log("phrase.quote >", phrase.quote);

  if (!phrase) {
    console.log("error with the phrase")
    message.textContent = "Today is a lovely day for a walk. Take 15 minutes for yourself outside."
  } else {
    // message.textContent = phrase;
    message.textContent = phrase.quote;
  }

}