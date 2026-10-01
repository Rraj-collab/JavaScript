function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  if (timeOfDay === `morning`) {
    return `Good ${timeOfDay}`;
  }
  if (timeOfDay === `afternoon`) {
    return `Good ${timeOfDay}`;
  }
  if (timeOfDay === `evening`) {
    return `Good ${timeOfDay}`;
  }
}

function creatGreeting(firstName, lastName, timeOfDay) {
  const fullName = formatName(firstName, lastName);
  const day = getGreeting(timeOfDay);
  return `${day}, ${fullName}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));