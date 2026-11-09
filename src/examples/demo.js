
const {
    findUnprintedDocuments,
    columnLabelToNumber,
    countFactorialTrailingZeroes
} = require("../src");

console.log("==================================");
console.log("      WORKFLOW UTILITY SUITE");
console.log("==================================");

// Document Dispatch
console.log("\n1. DOCUMENT DISPATCH");

const commands = "112332";
const unprinted = findUnprintedDocuments(commands);

console.log("Commands:", commands);
console.log("Unprinted documents:", unprinted);

// Spreadsheet Conversion
console.log("\n2. SPREADSHEET CONVERSION");

const column = "ZY";
const columnNumber = columnLabelToNumber(column);

console.log("Column label:", column);
console.log("Numeric index:", columnNumber);

// Factorial Analytics
console.log("\n3. FACTORIAL ANALYTICS");

const batchSize = 25;
const trailingZeroes = countFactorialTrailingZeroes(batchSize);

console.log("Input:", batchSize);
console.log("Factorial trailing zeroes:", trailingZeroes);

console.log("\n==================================");
console.log("       DEMO COMPLETED");
console.log("==================================");
