/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else. */

// var yourScore = 85;
// var tomScore = 66;
// var janeScore = 95;
// var peterScore = 56;
// var johnScore = 40;

if (score >= 80) {
    console.log('Your grade is A');
} else if (score >= 60) {
    console.log('Your grade is B');
} else if (score >= 50) {
    console.log('Your grade is C');
} else if (score >= 40) {
    console.log('Your grade is D');
} else {
    console.log('Your grade is F');
}


