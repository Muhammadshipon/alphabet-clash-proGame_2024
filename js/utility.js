function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText);
  return elementValue;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text ;
}
function setElementValueById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setBgColorById(elementId){
const element = document.getElementById(elementId);
element.classList.add('bg-orange-400');
}

function removeBgColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

//  generate random alphabet 
function getRandomAlphabet(){
  const alphabetsString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabets = alphabetsString.split('')
 const randomNumber = Math.random()*25;
 const index = Math.round(randomNumber);
 const alphabet = alphabets[index];
 return alphabet;

}


function play(){
  hideElementById('home-screen');
  hideElementById('score')
  showElementById('play-ground');
  continueGame();

  setElementValueById('current-life',10);
  setElementValueById('current-score',0);

  
}

function gameOver(){

  hideElementById('play-ground');
  showElementById('score');


  const lastScore = getTextElementValueById('current-score')
  setElementValueById('last-score',lastScore);

  const text =  getElementTextById('current-alphabet');
  // const currentAlphabet = text.toLowerCase();
  const currentAlphabet = text.toLowerCase();
  
  removeBgColorById(currentAlphabet);


}


