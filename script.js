console.log("Jestem super Kinią programistką");

//changing content of html

const heading = document.querySelector(".article-header--js");

console.log(heading);

heading.innerHTML = "blabalblabla";

//adding greet function

function invitation(firstName, secondName) {
  return `hello my name is ${firstName} ${secondName}`;
}

const firstName = "Kinga";
const secondName = "Głogowska";

greet = invitation(firstName, secondName);
console.log(greet);
