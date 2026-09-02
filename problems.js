const pythonProblems = {

  beginner: [
    {
      id: 1,
      title: "Hello World",
      question: "Print Hello World.",
      exampleInput: "No input",
      expectedOutput: "Hello World"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      question: "Read two numbers and print their sum.",
      exampleInput: "10 20",
      expectedOutput: "30"
    },
    {
      id: 3,
      title: "Subtract Two Numbers",
      question: "Read two numbers and print the difference.",
      exampleInput: "20 8",
      expectedOutput: "12"
    },
    {
      id: 4,
      title: "Multiply Two Numbers",
      question: "Read two numbers and print their product.",
      exampleInput: "5 6",
      expectedOutput: "30"
    },
    {
      id: 5,
      title: "Divide Two Numbers",
      question: "Read two numbers and print the result of division.",
      exampleInput: "20 4",
      expectedOutput: "5"
    },
    {
      id: 6,
      title: "Even or Odd",
      question: "Read a number and check whether it is even or odd.",
      exampleInput: "7",
      expectedOutput: "Odd"
    },
    {
      id: 7,
      title: "Positive or Negative",
      question: "Check whether a number is positive, negative, or zero.",
      exampleInput: "-5",
      expectedOutput: "Negative"
    },
    {
      id: 8,
      title: "Largest of Two",
      question: "Find the largest of two numbers.",
      exampleInput: "15 20",
      expectedOutput: "20"
    },
    {
      id: 9,
      title: "Smallest of Two",
      question: "Find the smallest of two numbers.",
      exampleInput: "15 20",
      expectedOutput: "15"
    },
    {
      id: 10,
      title: "Square of a Number",
      question: "Read a number and print its square.",
      exampleInput: "6",
      expectedOutput: "36"
    },
    {
      id: 11,
      title: "Cube of a Number",
      question: "Read a number and print its cube.",
      exampleInput: "3",
      expectedOutput: "27"
    },
    {
      id: 12,
      title: "Area of Rectangle",
      question: "Read length and width and calculate the area.",
      exampleInput: "10 5",
      expectedOutput: "50"
    },
    {
      id: 13,
      title: "Area of Circle",
      question: "Read the radius and calculate the area of a circle. Use 3.14 for pi.",
      exampleInput: "5",
      expectedOutput: "78.5"
    },
    {
      id: 14,
      title: "Check Voting Age",
      question: "Read age. Print Eligible if age is 18 or above, otherwise Not Eligible.",
      exampleInput: "20",
      expectedOutput: "Eligible"
    },
    {
      id: 15,
      title: "Print Numbers 1 to N",
      question: "Read N and print numbers from 1 to N.",
      exampleInput: "5",
      expectedOutput: "1 2 3 4 5"
    },
    {
      id: 16,
      title: "Sum of 1 to N",
      question: "Find the sum of all numbers from 1 to N.",
      exampleInput: "5",
      expectedOutput: "15"
    },
    {
      id: 17,
      title: "Multiplication Table",
      question: "Print the multiplication table of a number from 1 to 10.",
      exampleInput: "5",
      expectedOutput: "5 10 15 20 25 30 35 40 45 50"
    },
    {
      id: 18,
      title: "Count Characters",
      question: "Read a string and print the number of characters.",
      exampleInput: "hello",
      expectedOutput: "5"
    },
    {
      id: 19,
      title: "Reverse a String",
      question: "Read a string and print it in reverse.",
      exampleInput: "hello",
      expectedOutput: "olleh"
    },
    {
      id: 20,
      title: "Count Vowels",
      question: "Count the number of vowels in a string.",
      exampleInput: "education",
      expectedOutput: "5"
    }
  ],

  medium: [
    {
      id: 21,
      title: "Largest in a List",
      question: "Find the largest number in a list.",
      exampleInput: "10 25 7 42 18",
      expectedOutput: "42"
    },
    {
      id: 22,
      title: "Smallest in a List",
      question: "Find the smallest number in a list.",
      exampleInput: "10 25 7 42 18",
      expectedOutput: "7"
    },
    {
      id: 23,
      title: "Sum of List",
      question: "Find the sum of all numbers in a list.",
      exampleInput: "5 10 15 20",
      expectedOutput: "50"
    },
    {
      id: 24,
      title: "Average of Numbers",
      question: "Calculate the average of numbers in a list.",
      exampleInput: "10 20 30",
      expectedOutput: "20"
    },
    {
      id: 25,
      title: "Count Even Numbers",
      question: "Count how many even numbers are in a list.",
      exampleInput: "1 2 4 7 8 9",
      expectedOutput: "3"
    },
    {
      id: 26,
      title: "Count Odd Numbers",
      question: "Count how many odd numbers are in a list.",
      exampleInput: "1 2 4 7 8 9",
      expectedOutput: "3"
    },
    {
      id: 27,
      title: "Second Largest",
      question: "Find the second largest distinct number in a list.",
      exampleInput: "10 25 7 42 18",
      expectedOutput: "25"
    },
    {
      id: 28,
      title: "Palindrome String",
      question: "Check whether a string is a palindrome.",
      exampleInput: "madam",
      expectedOutput: "Palindrome"
    },
    {
      id: 29,
      title: "Palindrome Number",
      question: "Check whether a number is a palindrome.",
      exampleInput: "121",
      expectedOutput: "Palindrome"
    },
    {
      id: 30,
      title: "Factorial",
      question: "Find the factorial of a number.",
      exampleInput: "5",
      expectedOutput: "120"
    },
    {
      id: 31,
      title: "Prime Number",
      question: "Check whether a number is prime.",
      exampleInput: "17",
      expectedOutput: "Prime"
    },
    {
      id: 32,
      title: "Print Prime Numbers",
      question: "Print all prime numbers from 1 to N.",
      exampleInput: "10",
      expectedOutput: "2 3 5 7"
    },
    {
      id: 33,
      title: "Fibonacci Series",
      question: "Print the first N Fibonacci numbers.",
      exampleInput: "7",
      expectedOutput: "0 1 1 2 3 5 8"
    },
    {
      id: 34,
      title: "Count Digits",
      question: "Count the number of digits in an integer.",
      exampleInput: "12345",
      expectedOutput: "5"
    },
    {
      id: 35,
      title: "Sum of Digits",
      question: "Find the sum of all digits of a number.",
      exampleInput: "12345",
      expectedOutput: "15"
    },
    {
      id: 36,
      title: "Reverse Number",
      question: "Reverse the digits of a number.",
      exampleInput: "12345",
      expectedOutput: "54321"
    },
    {
      id: 37,
      title: "Remove Duplicates",
      question: "Remove duplicate values from a list.",
      exampleInput: "1 2 2 3 3 4",
      expectedOutput: "1 2 3 4"
    },
    {
      id: 38,
      title: "Sort a List",
      question: "Sort a list of numbers in ascending order.",
      exampleInput: "5 2 8 1 4",
      expectedOutput: "1 2 4 5 8"
    },
    {
      id: 39,
      title: "Character Frequency",
      question: "Find how many times a given character occurs in a string.",
      exampleInput: "banana a",
      expectedOutput: "3"
    },
    {
      id: 40,
      title: "Anagram Check",
      question: "Check whether two strings are anagrams.",
      exampleInput: "listen silent",
      expectedOutput: "Anagram"
    }
  ],

  advanced: [
    {
      id: 41,
      title: "Binary Search",
      question: "Search for a target value in a sorted list using binary search.",
      exampleInput: "1 3 5 7 9 | 7",
      expectedOutput: "Found"
    },
    {
      id: 42,
      title: "Linear Search",
      question: "Search for a target value in a list.",
      exampleInput: "4 8 2 9 5 | 9",
      expectedOutput: "Found"
    },
    {
      id: 43,
      title: "Maximum Subarray",
      question: "Find the maximum possible sum of a contiguous subarray.",
      exampleInput: "-2 1 -3 4 -1 2 1 -5 4",
      expectedOutput: "6"
    },
    {
      id: 44,
      title: "GCD of Two Numbers",
      question: "Find the greatest common divisor of two numbers.",
      exampleInput: "48 18",
      expectedOutput: "6"
    },
    {
      id: 45,
      title: "LCM of Two Numbers",
      question: "Find the least common multiple of two numbers.",
      exampleInput: "12 18",
      expectedOutput: "36"
    },
    {
      id: 46,
      title: "Armstrong Number",
      question: "Check whether a number is an Armstrong number.",
      exampleInput: "153",
      expectedOutput: "Armstrong"
    },
    {
      id: 47,
      title: "Perfect Number",
      question: "Check whether a number is a perfect number.",
      exampleInput: "28",
      expectedOutput: "Perfect"
    },
    {
      id: 48,
      title: "Merge Two Sorted Lists",
      question: "Merge two sorted lists into one sorted list.",
      exampleInput: "1 3 5 | 2 4 6",
      expectedOutput: "1 2 3 4 5 6"
    },
    {
      id: 49,
      title: "Frequency of Numbers",
      question: "Count the frequency of every number in a list.",
      exampleInput: "1 2 2 3 3 3",
      expectedOutput: "1:1 2:2 3:3"
    },
    {
      id: 50,
      title: "Rotate a List",
      question: "Rotate a list to the right by K positions.",
      exampleInput: "1 2 3 4 5 | 2",
      expectedOutput: "4 5 1 2 3"
    },
    {
      id: 51,
      title: "Balanced Parentheses",
      question: "Check whether parentheses in a string are balanced.",
      exampleInput: "(()())",
      expectedOutput: "Balanced"
    },
    {
      id: 52,
      title: "Longest Word",
      question: "Find the longest word in a sentence.",
      exampleInput: "Python is very powerful",
      expectedOutput: "powerful"
    },
    {
      id: 53,
      title: "Longest Substring",
      question: "Find the length of the longest substring without repeating characters.",
      exampleInput: "abcabcbb",
      expectedOutput: "3"
    },
    {
      id: 54,
      title: "Matrix Addition",
      question: "Add two matrices of the same size.",
      exampleInput: "1 2; 3 4 | 5 6; 7 8",
      expectedOutput: "6 8; 10 12"
    },
    {
      id: 55,
      title: "Transpose Matrix",
      question: "Find the transpose of a matrix.",
      exampleInput: "1 2 3; 4 5 6",
      expectedOutput: "1 4; 2 5; 3 6"
    },
    {
      id: 56,
      title: "Pascal's Triangle",
      question: "Print the first N rows of Pascal's triangle.",
      exampleInput: "5",
      expectedOutput: "1 / 1 1 / 1 2 1 / 1 3 3 1 / 1 4 6 4 1"
    },
    {
      id: 57,
      title: "Merge Sort",
      question: "Sort a list using the merge sort algorithm.",
      exampleInput: "8 3 5 1 9 2",
      expectedOutput: "1 2 3 5 8 9"
    },
    {
      id: 58,
      title: "Quick Sort",
      question: "Sort a list using the quick sort algorithm.",
      exampleInput: "7 2 9 1 5",
      expectedOutput: "1 2 5 7 9"
    },
    {
      id: 59,
      title: "Find Missing Number",
      question: "A list contains numbers from 1 to N with one number missing. Find it.",
      exampleInput: "1 2 3 5 6",
      expectedOutput: "4"
    },
    {
      id: 60,
      title: "Two Sum",
      question: "Find two numbers in a list whose sum equals the target.",
      exampleInput: "2 7 11 15 | 9",
      expectedOutput: "2 7"
    }
  ]

};
