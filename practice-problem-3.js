/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

var num1 = 13;
var num2 = 79;
var num3 = 95;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the largest");
} else {
    console.log("num3 is the largest");
}