// Copyright (c) 2022 Lily C All rights reserved
//
// Created by: Lily C
// Created on: April 13, 2022
// This file contains the JS functions for index.html

function guessSent() {
 const MAX = 6;
 const MIN = 1;
 let correctNumber = Math.floor(Math.random() * MAX + MIN); 
 let guessedNumber = document.getElementById("user-guess").value;

 // if/then statement: if correctNumber is equal to guessedNumber
 if (correctNumber == guessedNumber) {
   document.getElementById("results").innerHTML = "That is correct! Good job!";
 }

  // if/then statement: if correctNumber is not equal to guessedNumber
if (correctNumber != guessedNumber) {
   document.getElementById("results").innerHTML = "Your guess was not correct. My number was " + correctNumber + "," + " please try again.";
 }
}
