/** In this file are stored functions and code that can be shared and reused by multiples javascript files */

/* Check if c is a digit,and return true in that case */
function isDigit(c) {
    return c >= '0' && c <= '9';
}

module.exports = isDigit;