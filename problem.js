function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  const difference = income - expenses;
  const tax = difference * 0.2;
  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];
  const message = username + " sent you an email from " + domain;
  return message;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }

  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (testScore > 50 || schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily) {
    finalScore += 20;
  }
  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime += waitingTimes[i];
  }

  const averageTime = Math.round(totalTime / waitingTimes.length);

  const remainingPeople = serialNumber - waitingTimes.length - 1;

  const waitingTimeForIsraat = remainingPeople * averageTime;

  return waitingTimeForIsraat;
}
