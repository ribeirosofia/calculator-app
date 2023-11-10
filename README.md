# calculator-app-2
This repository will be dedicated to implement calculator and operation features writen in Javascript<br/>

This calculator was implemented using basic logic with algorythms in Javascript, but also in HTML and CSS.<br/>
The main steps to build the calculator were:<br/>
<strong>1-</strong> build the HTML;<br/>
<strong>2-</strong> build the CSS;<br/>
<strong>3-</strong> display the operators on the screen;<br/>
<strong>4-</strong> display Clear button and del button;<br/>
<strong>5-</strong> display numbers button;<br/>
<strong>6-</strong> implement a calculation function, with the following steps:<br/>
  <strong>a-</strong> create the button equals const, which will receive in the event listener the calculation function.<br/>
  <strong>b-</strong> implement operators function to make the operations work.<br/>
  <strong>c-</strong> It was created variables that could sustain the configuration of the math, which were previousOperand, operator and currentOperand.<br/>
  <strong>d-</strong> Reatribute the values of the variables above.<br/>
  <strong>e-</strong> insert the previousOperand variable inside the operations event listeners function to be reatributed in a logic that made it be displayed on the screen.<br/>
  <strong>f-</strong> The button clear will now have to blank not only the outputDisplay itself, but also previousOperand, operator and currentOperand.<br/>
  <strong>g-</strong> Operation functions will now do the math by parseFloating their arguments, once the type of data is actually a string.<br/>
  <strong>h-</strong> inside the calculation function, the result variable initially must only be declared, not attributed.<br/>
  <strong>i-</strong> to make the calculation work, it was used a destructure logic to include numA, operator and numB and attribute to them the value of a slice regex containing<br/> 
  the operation signs in order to make the previousOperand variable separtely.<br/>
  <strong>j-</strong> it was used the switch case logic to use the operators to display the result with operation functions, and then in the outputDisplay.<br/>
  <strong>k-</strong> to end the calculation function, the result will now be displayed at the screen.<br/>
  <strong>l-</strong> the previousOperand will now have the value of what goes on the OutputDisplay, so the calculation continues.<br/>
  <strong>j-</strong> operator will have an empty string as a value so it can be reatributed in the middle of the calculation.<br/>
  <strong>l-</strong> currentOperand will have value of zero at the end of the calculation so it doesn't go undefined, NaN ou null, being able to do another calculation.<br/>
<strong>7-</strong> prevent the user to divide a number by zero. It was changed the logic inside the switch case division so the outputDisplay <br/>
  could return in the textContent the message "Impossível divisão por zero". The else statement was also changed so the division by other numbers could happen normally.
   
