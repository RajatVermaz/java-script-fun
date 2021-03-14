// to print only even number from given array

let que1B = document.querySelector('.que1B');
let showQue1 = document.querySelector('.showQue1');

const que1 = () => {
  let arr = [4, 5, 3, 6, 8, 9, 1, 22, 43, 56];
  let lenArr = arr.length;
  for (let i = 0; i < lenArr; i++) {
    if (arr[i] % 2 == 0) {
      h3 = document.createElement('h4');
      h3.innerHTML = `${arr[i]}`;
      showQue1.append(h3);
    }
  }
};

// to print the count of maximun number of consicutive 1's
const que2 = () => {
  let arr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
  let count = 0;
  let final = 0;
  let lenArr1 = arr1.length;
  for (let i = 0; i < lenArr1; i++) {
    if (arr1[i] == 0) {
      count = 0;
    } else {
      count = count + 1;
    }
    if (count > final) {
      final = count;
    }
  }
  console.log(final);
};

que2();

// to find the redundant number from a given set of array
const que3 = () => {
  let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12];
  let i, j;
  let arr2Size = arr2.length;

  for (i = 0; i < arr2Size; i++) {
    for (j = i + 1; j < arr2Size; j++) {
      if (arr2[i] == arr2[j]) {
        console.log(arr2[i]);
      }
    }
  }
};
que3();

// to fetch an api in javascript

const apiFetch = () => {
  fetch('http://www.example.com/api/get/1', { mode: 'no-cors' })
    .then((res) => {
      res.text();
      // console.log(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

apiFetch();

// sort bt id's

// const descendSort = () => {
//   const arr = [
//     { id: 4, name: 'abc' },
//     { id: 10, name: 'ab2' },
//     { id: 5, name: 'abc3' },
//     { id: 6, name: 'abc5' },
//   ];
//   console.log(arr.sort((a, b) => b.id - a.id));
// };

// const ascendSort = () => {
//   const arr = [
//     { id: 4, name: 'abc' },
//     { id: 10, name: 'ab2' },
//     { id: 5, name: 'abc3' },
//     { id: 6, name: 'abc5' },
//   ];
//   console.log(arr.sort((a, b) => a.id - b.id));
// };

// given array that we have to sort on the basis of id
const arr = [
  { id: 9, name: 'abc' },
  { id: 5, name: 'ab2' },
  { id: 4, name: 'abc3' },
  { id: 6, name: 'abc5' },
];
const body = document.querySelector('.show'); // this querySelector is for inserting data into html
const button = document.querySelector('#button'); // this is for button functionalities
let toggle = true; // variable for button toggle between ascending and descending

// main logic i.e. sorting the given array
// this printSorted method is called in button: (refer index.html file)
const printSorted = () => {
  body.innerHTML = '';
  if (toggle) {
    button.innerHTML = 'Descending order'; // dynamically inserting sorted data into browser
    toggle = false;
    arr.sort((a, b) => b.id - a.id); // logic :- call sort function: it will compare until the elements are in sorted order
  } else {
    button.innerHTML = 'Ascending order'; // dynamically inserting sorted data into browser
    toggle = true;
    arr.sort((a, b) => a.id - b.id); // logic :- call sort function: it will compare until the elements are in sorted order
  }

  const ul = document.createElement('ul'); // creating dynamically an unordered list.
  // const li = document.createElement('li');
  // li.textContent = 'hello rajat';

  // using foreach to loop
  arr.forEach((data) => {
    let li = document.createElement('li'); // creating dynamic list.

    // Data shows with this code
    li.innerHTML = `<div>
    <h4 class="text-color"><span class="data">  id : ${data.id}</span>   <span class="data"> Name : ${data.name}</span></h4>
  </div>`;
    ul.appendChild(li); //will connect li to ul
  });
  body.appendChild(ul); // will connect ul to body
  // ul.appendChild(li); //will connect li to ul
};
// ascendSort();
// descendSort();
printSorted();
