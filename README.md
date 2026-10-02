# Greeting JavaScript Project

A simple JavaScript project that creates personalized greetings based on the person's first name, last name, and time of day.

## Features

* Formats first and last names into a full name.
* Generates greetings for:

  * Morning
  * Afternoon
  * Evening
* Combines the greeting and person's name.

## Project Structure

```text
project-folder/
│
├── index.js
└── README.md
```

## Requirements

You only need **Node.js** installed on your computer.

Check whether Node.js is installed:

```bash
node --version
```

If Node.js is installed, the command will display its version.

## How to Run

### 1. Clone or download the project

Download the project and open the project folder in your terminal.

### 2. Run the JavaScript file

If your JavaScript file is named `index.js`, run:

```bash
node index.js
```

### 3. Expected Output

```text
Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
```

## Important Note

Make sure the function name is consistent.

The function should be:

```javascript
function createGreeting(firstName, lastName, timeOfDay) {
  const fullName = formatName(firstName, lastName);
  const day = getGreeting(timeOfDay);
  return `${day}, ${fullName}`;
}
```

The function calls should also use `createGreeting()`:

```javascript
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
```

## License

This project is created for learning and practice purposes.

## Project Link 
```link
https://roadmap.sh/projects/js-greeting-builder
```
