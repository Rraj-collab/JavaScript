//  should return "A", "B", "C", "D", or "F" based on the score.

function getLetterGrade(score) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }
  return grade;
}

//  should return true when the score is 60 or higher.

function hasPassed(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}

// should return a short message for the grade.

function getFeedback(grade) {
  if (grade === "A") {
    return `Excellent work`;
  } else if (grade === "F") {
    return `Keep practicing`;
  } else {
    return `You passed`;
  }
}

// should return one object with name, score, grade, passed, and feedback.

function createGradeReport(name, score) {
  const grade = getLetterGrade(score);
  const isPassed = hasPassed(score);
  const feedback = getFeedback(grade);
  return `name: "${name}", score: ${score}, grade: ${grade}, passed: ${isPassed}, feedback: ${feedback}`;
}

console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
