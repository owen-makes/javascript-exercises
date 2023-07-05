const removeFromArray = function(array,...args) {
    const a = array
    args.forEach((arg) =>{
    if (a.indexOf(arg) > -1){
        a.splice(a.indexOf(arg), 1)[0]
             
    }}) 
    return a
};

// Do not edit below this line
module.exports = removeFromArray;
