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


//Training JS #10: loop statement --for
//https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        even.push(arr[i])
      }
      else{
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }