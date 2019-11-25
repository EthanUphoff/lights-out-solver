# Lights Out Solver
A search algorithm to find optimal 4x4 lights out solutions for valid problems. It will not find an answer in the case of an invalid problem.

## How to Run
1. `npm start`

## How to add examples
Add a constant at the beginning of a.js with the following format:  
`const lightOutX = [<4x4 array of true/false>, 0, []]`  
Once you have the const you can call it at the end with:  
`solve(lightOutX, [])`