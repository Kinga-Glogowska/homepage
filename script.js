console.log("Jestem super Kinią programistką");

//changing content of html

const heading = document.querySelector(".article-header--js");

console.log(heading);

heading.innerHTML = "blabalblabla";

//greet function

function invitation(firstName, secondName) {
  return `hello my name is ${firstName} ${secondName}`;
}

const firstName = "Kinga";
const secondName = "Głogowska";

greet = invitation(firstName, secondName);
console.log(greet);

//arrow function
const invitationArrow = (firstName, secondName) => {
  return `hello my name is ${firstName} ${secondName}`;
};

greeting = invitationArrow("kinga", "Glogowska");
console.log(greeting);

//a function changing html content

const createContent = (querySelectorContent, content) => {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
};

createContent(".header-site__title--js", "Witaj świecie");
