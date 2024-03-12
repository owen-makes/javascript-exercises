function fibonacci(position) {
    if (position < 0 ){
        return "OOPS" }
    let sequenceArray = [1, 1]   
    console.log(sequenceArray[0])

    
    for (let i=1; i < (position+2) ; i++) {
        sequenceArray.push((sequenceArray[i] + sequenceArray[i-1]))
                }

    console.log(sequenceArray)
    return sequenceArray[position-1]
};

// Do not edit below this line
module.exports = fibonacci;
