
/**
 * Converts an Excel-style column label into a number.
 *
 * A = 1, B = 2, ..., Z = 26, AA = 27.
 *
 * @param {string} columnLabel
 * @returns {number}
 */
function columnLabelToNumber(columnLabel) {
    if (
        typeof columnLabel !== "string" ||
        !/^[A-Z]+$/.test(columnLabel)
    ) {
        throw new Error("Column label must contain uppercase letters only.");
    }

    let columnNumber = 0;

    for (const character of columnLabel) {
        const characterValue = character.charCodeAt(0) - 64;

        columnNumber = columnNumber * 26 + characterValue;
    }

    return columnNumber;
}

module.exports = { columnLabelToNumber };
