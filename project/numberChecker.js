function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

function isZero(number) {
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function describeNumber(number) {
  const pos = isPositive(number);
  const neg = isNegative(number);
  const zero = isZero(number);
  const even = isEven(number);
  const odd = !even;
  return `positive: ${pos}, negative: ${neg}, zero: ${zero}, even: ${even}, odd: ${odd}`;
}
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
