# Lights Out Solver
A search algorithm to find optimal 4x4 lights out solutions for valid problems. It will not find an answer in the case of an invalid problem.

## How to Run
1. `npm start`

## How to add examples
Add a constant at the beginning of a.js with the following format:  
`const lightOutX = [<4x4 array of true/false>, 0, []]`  
Once you have the const you can call it at the end with:  
`solve(lightOutX, [])`

## What is b.js?
b.js is a.js with reduced memory use. Instead of storing the full child lights out structure, each child only holds the cost and all the clicks so far. The lights out array is then constructed when it is being treated as the parent node.