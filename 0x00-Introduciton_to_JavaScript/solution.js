// 1. SUM OF TWO NUMBERS
// Create a function called sum that takes in two numbers as arguments and returns their sum.

const sum = (num1, num2) => {
  return num1 + num2;
};

// 2. RETURN THE NEXT NUMBER FROM THE NUMBER PASSED
// Write a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.

const nextNumber = (num) => {
  return num + 1;
};

// 3. FIND PERIMETER OF A RECTANGLE
// Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.

const rectanglePerimeter = (length, width) => {
  return length * width;
};

// 4. RETURN SOMETHING TO ME
// Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function. Examples:

const returnSomethingToMe = (string) => {
  return `something ${string}`;
};

// 5. BOB'S BMI VS JANE'S BMI
// Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".

const greaterBMI = (Bob, Jane) => {
  if (Bob > Jane) {
    return "Bob";
  }
  if (Jane > Bob) {
    return "Jane";
  }
  if ((Bob = Jane)) {
    return "Equal";
  }
};

// 6. BASKETBALL POINTS
// You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.

const basketBallPoints = (twoPointers, threePointers) => {
  let finalPoints = twoPointers * 2 + threePointers * 3;
  return finalPoints;
};

// 7. LESS THAN A HUNDRED
// Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.

const isSumMoreThan100 = (number1, number2) => {
  let sum = number1 + number2;
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
};

// 8. CONVERT MINUTES TO SECONDS
// Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"

const convertToSeconds = (numberOfMinutes) => {
  let seconds = numberOfMinutes * 60;
  return `${seconds} seconds`;
};

// 9. GREAT AMONG THE THREE
// Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.

const greater = (no1, no2, no3) => {
  if (no1 > no2 && no1 > no3) {
    return no1;
  }
  if (no2 > no1 && no2 > no3) {
    return no2;
  }
  if (no3 > no1 && no3 > no2) {
    return no3;
  }
  if (no3 == no1 && no3 == no2) {
    return no3;
  }
};

// 10. LESS AMONG THREE
// Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them.

const least = (n1, n2, n3) => {
  if (n1 < n2 && n1 < n3) {
    return n1;
  }
  if (n2 < n1 && n2 < n3) {
    return n2;
  }
  if (n3 < n1 && n3 < n2) {
    return n3;
  }
  if (n3 == n1 && n3 == n2) {
    return n3;
  }
};

// 11. FOOTBALL POINTS
// Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.

const footballPoints = (win, draw, lose) => {
  let totalPoints = win * 3 + draw * 1 + lose * 0;
  return totalPoints;
};

// 12. EVEN NUMBERS
// Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.

const isEven = (numb) => {
  if (numb % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

for (let i = 0; i < 101; i++) {
  if (isEven(i) == true) {
    console.log(i);
  }
}
