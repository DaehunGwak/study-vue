const greetingStr = '🥳 Hello World!';
const whatisupStr = '🤩 What is up!';
let toggle = true;

const greetingTag = document.getElementsByTagName('h1')[0];


function changeGreeting() {
  toggle = !toggle;
  greetingTag.textContent = toggle ? greetingStr : whatisupStr;
}
