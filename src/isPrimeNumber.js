// isPrimeNumber - function predicatum wich check is number prime or not
// parameter num is a natural number > 2
function isPrimeNumber(num) {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
}

export default isPrimeNumber;
