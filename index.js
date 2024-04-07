// Written my code here!
const mainNode = document.querySelector('main#main');
mainNode.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "Reuben Kamau"; 
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);
