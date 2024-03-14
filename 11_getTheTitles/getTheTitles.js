const getTheTitles = function(array) {
    function isTitle(object){
        return object.title
    }
    
    return array.map(isTitle)
  
};

// Do not edit below this line
module.exports = getTheTitles;
