function printPrimes(num) {
  let result
  if (num > 1000){
    result = 'слишком большое число';
  } else if (num === 1 || num === 0) {
    result = 'число ни простое, ни составное';
  } else {
    isPrime(num) ? result = `$ {num} простое число` result = `{num} составное число`;  
  }
  return result
}

function isPrime(num){
  for (let i=2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log (printPrimes(1001))