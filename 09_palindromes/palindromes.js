const palindromes = function (text) {
    let lowercaseText = text.toLowerCase()
    lowercaseText = lowercaseText.replaceAll(/\s/g,"")
    lowercaseText = lowercaseText.replaceAll(",","")
    console.log(lowercaseText)
    const textArray = lowercaseText.split("")



    //handle punctuation
    if (lowercaseText.endsWith("!") || lowercaseText.endsWith(".") || lowercaseText.endsWith('?') ){
        const punctuation = textArray.pop(textArray.length)
        textArray.unshift(punctuation)
    }
    

    

    const invertedText = (textArray.reverse()).join("") 
    return lowercaseText == invertedText?   true :  false;
};

// Do not edit below this line
module.exports = palindromes;
