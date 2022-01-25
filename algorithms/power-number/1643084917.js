const power = (base, pow) => {
  // Recursive function
  if (pow === 0) {
    return 1;
  }
  return base * power(base, pow - 1);
};

module.exports = power;
