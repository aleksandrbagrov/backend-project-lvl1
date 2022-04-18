// gcd - (greatest common divisor) - determines the GCD of two integers
const gcd = (num1, num2) => {
  const residue = num1 % num2;
  if (residue === 0) {
    return num2;
  }
  return gcd(num2, residue);
};

export default gcd;
