# String calculator in Rust

## Commit 1: first commit
Created directory and pushed to github.

## Commit 2: empty string should give sum 0
Empty string as input to my function ```add()``` should render the output 0.

## Commit 3: string with 1 number
A string like ```"1"``` gives output ```1```.

## Commit 4: string upto 2 numbers
A string like ```"1, 4"``` should give output ```5```.

## Commit 5: string with multiple numbers
A string like ```"1, 4, 2, 8"``` should give output ```15```.<br>
Test case passed in first run without modifying code. Code from last commit was good enough.

## Commit 6: string with whitespace like next line
A string like ```"1\n5, 4"``` should give output ```10```.

## Commit 7: given delimiter
A string like ```"//%\n1%5%4"``` should give output ```10```.

## Commit 8: panic on detecting negative numbers
A string lke ```"//$\n1$5$-4$-2$-6$-8"``` should panic and display message ```negative numbers not allowed -4 -2 -6 -8```.

## Commit 9: each number should be lesser than 1000
A string like ```"//$\n1$5$1005$1000"``` should give output ```1006```.

## Commit 10: longer delimiter
A string like ```"//[$$$$]\n1$$$$5$$$$4$$$$10"``` should give output ```20```.

## Commit 11: multiple delimiter
A string like ```"//[%][;][^]\n1%5^4;10"``` should give output ```20```.

## Commit 12: multiple longer delimiter
A string like ```"//[$$$][^^^][%^%]\n1$$$5^^^4%^%10"``` should give output ```20```.

## Commit 13 : no ui
There are libraries like Yew with Trunk using which I can build UI for rust as well, just like I used Material UI for ReactJS.
I could also use egui to quickly render things.<br>
But given the time constraints, I am deciding to not make a web application or an executable and restrict the scope till the basic functionality,
the working of ```add()``` function, while following the TDD approach.