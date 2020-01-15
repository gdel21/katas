//Squash the bugs
//https://www.codewars.com/kata/56f173a35b91399a05000cb7

    function findLongest(str) {
    
        var spl = str.split(" ");
        var longest = 0;
        
        for (var i = 0; i < spl.length; i++) {
        if(spl[i].length > longest) {
            longest = spl[i].length
        }
        }
    
        return longest
    }

//Will you make it?
//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true : false
  };