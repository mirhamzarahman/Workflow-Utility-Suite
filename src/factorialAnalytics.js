
/**
 * Counts trailing zeroes in a factorial value.
 *
 * Instead of calculating n!, counts the factors of 5.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialTrailingZeroes(n) {
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative safe integer.");
    }

    let zeroCount = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        zeroCount += n;
    }

    return zeroCount;
}

module.exports = { countFactorialTrailingZeroes };
