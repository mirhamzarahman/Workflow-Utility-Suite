
const {
    findUnprintedDocuments
} = require("./documentDispatcher");

const {
    columnLabelToNumber
} = require("./spreadsheetConverter");

const {
    countFactorialTrailingZeroes
} = require("./factorialAnalytics");

module.exports = {
    findUnprintedDocuments,
    columnLabelToNumber,
    countFactorialTrailingZeroes
};
