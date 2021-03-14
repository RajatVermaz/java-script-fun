// initialize the field where the result is going to show
let result = document.querySelector('#result');
// create an arrow function

// for coin calculation
let bitCoin = 0;
//
let score = document.querySelector('#score');
score.innerHTML = `you have ${bitCoin} bitcoin left..`;
const palindrom = (event) => {
  // prevent the default behavour of the form
  event.preventDefault();

  // get the value of input string from the browser
  let palin = document.querySelector('#palin').value;

  // convert input string into array
  strArray = palin.split(''); // do not put space inside ''

  // reverse the array and convert the array back to string by using join() method now
  reStrArray = strArray.reverse().join('');

  // logic of palindrom i.e if input string === reverse string
  // then palindrom else not palindrom
  // this result.innerHtml = ''; will replace the previous result with
  // blank string so that we can append next result on the same place
  result.innerHTML = '';

  if (palin === reStrArray) {
    bitCoin++;
    score.innerHTML = `you have ${bitCoin} bitcoin left..`;
    let h1 = document.createElement('div');
    h1.innerHTML = `<div><h1 class="cong">Congratulation! You have WON ${bitCoin} bit coin so far..</h1><button id="tryAgain" onclick="resetClick()">Try again</button><button id="dyk" onclick="info()">
    Don't know about palindrom?
  </button></div>`;
    result.appendChild(h1);
  } else {
    bitCoin--;
    score.innerHTML = `you have ${bitCoin} bitcoin left..`;
    let h3 = document.createElement('div');
    h3.innerHTML = `<div><h1 class="oho">Oho! You have Lost 1 bit coin total bit coin left so far : ${bitCoin}.. </h1><button id="tryAgain" onclick="resetClick()">Try again</button>&nbsp;&nbsp;&nbsp<button id="dyk" onclick="info()">
    Don't know about palindrom?
  </button>  </div>`;
    result.appendChild(h3);
  }
};
const resetClick = () => {
  result.innerHTML = '';
  document.querySelector('#palin').value = '';
  document.querySelector('.def').innerHTML = '';
};

const info = () => {
  const para = document.querySelector('.def');
  console.log(para);
  para.innerHTML =
    '<p id="know">A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar. There are also numeric palindromes, including date/time stamps using short digits 11/11/11 11:11 and long digits 02/02/2020</p>';
};
