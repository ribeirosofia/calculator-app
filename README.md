# calculator-app-2
This repository will be dedicated to implement calculator and operation features writen in Javascript

This calculator was implemented using basic logic with algorythms in Javascript, but also in HTML and CSS.
The main steps to build the calculator were:
1- build the HTML;
2- build the CSS;
3- display the operators on the screen;
4- display Clear button and del button;
5- display numbers button;
6- implement a calculation function, with the following steps:
  a- create the button equals const, which will receive in the event listener the calculation function.
  b- implement operators function to make the operations work.
  c- It was created variables that could sustain the configuration of the math, which were previousOperand, operator and currentOperand.
  d- Reatribute the values of the variables above.
  e- insert the previousOperand variable inside the operations event listeners function to be reatributed in a logic that made it be displayed on the screen.
  f- The button clear will now have to blank not only the outputDisplay itself, but also previousOperand, operator and currentOperand.
  g- Operation functions will now do the math by parseFloating their arguments, once the type of data is actually a string.
  h- inside the calculation function, the result variable initially must only be declared, not attributed.
  i- to make the calculation work, it was used a destructure logic to include numA, operator and numB and attribute to them the value of a slice regex containing 
  the operation signs in order to make the previousOperand variable separtely.
  j- it was used the switch case logic to use the operators to display the result with operation functions, and then in the outputDisplay.
  k- to end the calculation function, the result will now be displayed at the screen.
  l- the previousOperand will now have the value of what goes on the OutputDisplay, so the calculation continues.
  j- operator will have an empty string as a value so it can be reatributed in the middle of the calculation.
  l- currentOperand will have value of zero at the end of the calculation so it doesn't go undefined, NaN ou null, being able to do another calculation.
7- prevent the user to divide a number by zero. It was changed the logic inside the switch case division so the outputDisplay 
  could return in the textContent the message "Impossível divisão por zero". The else statement was also changed so the division by other numbers could happen normally.
   
