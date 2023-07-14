const sumAll = function(beg,end) {

    if (typeof(beg) != "number" || typeof(end) != "number" || beg < 0 || end < 0 ){
        return "ERROR"
    } else {
        const max = Math.max(beg, end)
        const min = Math.min(beg,end)
        let result = 0

        for (let i = min; i <= max; i++){
            result += i
        }
        return result 
    }
};

// Do not edit below this line
module.exports = sumAll;
