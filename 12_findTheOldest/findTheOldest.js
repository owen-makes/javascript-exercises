const findTheOldest = function(arr) {

    const oldest = arr.sort(function(a,b){
        let lastItem
        let nextItem
        const d = new Date().getFullYear()
        if ('yearOfDeath' in a){
            lastItem = a.yearOfDeath - a.yearOfBirth
        } else {
            lastItem = d - a.yearOfBirth
        }
        if ('yearOfDeath' in b){
            nextItem = b.yearOfDeath - b.yearOfBirth
        } else {
            nextItem = d - b.yearOfBirth
        }
        return lastItem > nextItem ? -1 : 1
        
    })
    
    return oldest[0]
    
};

// Do not edit below this line
module.exports = findTheOldest;
