// Import stylesheets
import './style.css';

// Prime numbers!

// let timer = 0;
// function primeNumbers(value) {
//   for (let i = 2; i <= 100; i++) {
//     if (i % 2 !== 0 ) {
//       timer = timer + 1;
//       console.log(i);
//       if (timer == value) break;
//     }
//   }
// }

// primeNumbers(7);

function isPrime(n) {
  if (n == 0 || n == 1 || n == 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let n = 100;
let timer = 0;
for (var i = 0; i <= n; i++) {
  if (isPrime(i) && timer == 5) {
    timer = timer + 1;
    console.log(i);
  }
}

// pesudo :
