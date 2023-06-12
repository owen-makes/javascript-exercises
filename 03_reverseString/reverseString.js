const reverseString = function(text) {
    let normal = text.split("")
    let backwards = normal.reverse()
    let commaSeparated = backwards.toString()
    return commaSeparated.replaceAll(",","")
};

// Do not edit below this line
module.exports = reverseString;
