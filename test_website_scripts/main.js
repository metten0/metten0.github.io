var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'test_website_images/metten.jpg') {
      myImage.setAttribute ('src','test_website_images/jason_metten.jpg');
    } else {
      myImage.setAttribute ('src','test_website_images/metten.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Holy crap what an ugly sumbitch, right ' + myName + '?';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Holy Crap What an Ugly Sumbitch, right ' + storedName + '?';
}

myButton.onclick = function() {
  setUserName();
}
document.querySelector('h2').onclick = function() {
    alert('Ouch! Stop poking me!');
}