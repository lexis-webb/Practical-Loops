// Part 2: Expanding Functionality
// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

function loopThrough(csvString) {
    const rows = [];
    //split into rows
    csvString.split(/\r?\n/).forEach(row => {
        const cells = row.split(',');
        rows.push(cells);
    });
    
    // Log each row
    rows.forEach(row => console.log(row));
}
let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
loopThrough(csvString);

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

const csvArray = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctors Assistant", "26"]
  ];
    const head = csvArray[0];

    const result = csvArray.map(row => {
        const obj = {};
        row.forEach((cell, index) => {
            obj[head[index]] = cell; 
        });
        return obj;
    });

    console.log(result);


    // Remove the last element from the sorted array.
    // Insert the following object at index 1:
    // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
    // Add the following object to the end of the array:
    // { id: "7", name: "Bilbo", occupation: "None", age: "111" }

    let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

    array.pop();

    array.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

    array.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    console.log(array);