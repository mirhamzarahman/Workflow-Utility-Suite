
/**
 * Simulates a printer's temporary document memory.
 *
 * Commands:
 * 1 - Store the current document.
 * 2 - Print the newest stored document,
 *     or the current document if memory is empty.
 * 3 - Print the current document immediately.
 *
 * @param {string} commands - Sequence of printer commands.
 * @returns {number[]} Document indexes that were never printed.
 */
function findUnprintedDocuments(commands) {
    const documentStack = [];
    const printedDocuments = new Array(commands.length + 1).fill(false);

    for (let i = 0; i < commands.length; i++) {
        const documentNumber = i + 1;
        const command = commands[i];

        if (command === "1") {
            documentStack.push(documentNumber);
        } 
        else if (command === "2") {
            if (documentStack.length > 0) {
                const document = documentStack.pop();
                printedDocuments[document] = true;
            } else {
                printedDocuments[documentNumber] = true;
            }
        } 
        else if (command === "3") {
            printedDocuments[documentNumber] = true;
        } 
        else {
            throw new Error(`Invalid printer command: ${command}`);
        }
    }

    const unprintedDocuments = [];

    for (let i = 1; i <= commands.length; i++) {
        if (!printedDocuments[i]) {
            unprintedDocuments.push(i);
        }
    }

    return unprintedDocuments;
}

module.exports = { findUnprintedDocuments };
