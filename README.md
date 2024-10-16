# String Calculator

## About
This task involves to create a calculator which takes a string of numbers as argument for which we need to find sum.
We should follow Test Driven Development to complete this task.


## Steps
1) Create a simple String calculator with a method signature like this:
<br>
<br>
```
int add(string numbers)
```
<br>

##### Input: 
A string of comma-separated numbers

##### Output:
An integer, sum of the numbers

##### Examples:

Input: “”, Output: 0<br>
Input: “1”, Output: 1<br>
Input: “1,5”, Output: 6<br>
<br>
2) Allow the add method to handle any amount of numbers.

3) Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

4) Support different delimiters:

    - To change the delimiter, the beginning of the string will contain a separate line that looks like this: 
```//[delimiter]\n[numbers…]```. For example, ```//;\n1;2``` where the delimiter is ```;``` should return 3.
<br>
<br>
5) Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".
    - If there are multiple negative numbers, show all of them in the exception message, separated by commas.

## Technology used: 

First, I will try to complete in-hand task with following:
1) ReactJS - For building components and App
2) Material UI - For UI

## Documentation

### Commit 1 : Design and layout of application
#### Functionality decisions:
I started with creating a basic layout - there should be text, requesting for user input: ```<Typogrphy> from material ui```, 
an input field in which user can give input: ```<TextField> in material ui```, a button ```<Button> in material ui``` clicking
on which state in react for ```stringAndSum``` should update.<br>
I named the state variable ```stringAndSum``` because initially I created two state variables ```inputVariables``` and ```answer```,
so I combined them together in an object and created a state variable out of it.
Later, I decided to make this a component in itself for modularity and make ```App.js``` look cleaner to read: ```InputCard```.
#### Design decisions:
The requirement of application is to calculate sum of given string, so I decided to keep things simple in UI.
I ended up deciding to give background a light color and ```<Card> from material UI``` Golden color. I tried various colors for text
on this card like ```complementary```, ```tetradic```, ```triadic``` and ```analogous``` but nothing was fitting well. Black was a better fit for text.
### Conclusion:
Started with basic design layout, look and feel of Application.

### Commit 2: Following TDD
This commit is made to share that TDD is being followed. I have a function ```sum()``` in ```App.js``` which is exported using
```module.exports = {sum}```. This function in used in ```App.test.js``` for tests.<br>
At the moment, there are 2 tests, 1 with an empty string ```" "``` and another test case has a string literal ```"100"```.<br>
Our function ```sum()``` only has functionality to ```return 0```. Hence, first test case is cleared but second fails.<br>
Next steps would be to evolve the ```sum()``` and to setup test cases for testing right functionality. 