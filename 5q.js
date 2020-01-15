//Simple pig latin
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
    let split = str.split(" ")
    let array = [];
    for(let i = 0; i < split.length; i++){
      if(split[i][0].match(/[a-z]/i)){
        array.push((split[i].substring(1) + split[i].substring(0, 1) + "ay"))
      }
      else{
        array.push(split[i])
      }
    }
    return array.join(" ")
  }

//Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
    let minutes =  ((seconds-(seconds%60))/60)
    let hours = ((minutes-(minutes%60))/60)
    minutes -= (hours*60)
    let realSeconds = seconds - (hours*3600) - (minutes*60)
  
    //Formatting each time interval
    if(hours < 10){
      hours = "0" + hours
    }
    if(minutes < 10){
      minutes = "0" + minutes
    }
    if(realSeconds < 10){
      realSeconds = "0" + realSeconds
    }
  
    return hours + ":" + minutes + ":" + realSeconds
  }

  //Moving zeros to end
  //https://www.codewars.com/kata/52597aa56021e91c93000cb0

  var moveZeros = function (arr) {
    let final = [...arr]
    console.log(final)
    let zeros = []
    for(let i = 0; i < final.length; i++){
      if(final[i] === 0){
        zeros.push(final.splice(i, 1)[0])
        i--
      }
    }
    return final.concat(zeros)
  }

  //Directions Reduction
  //https://www.codewars.com/kata/550f22f4d758534c1100025a

  function dirReduc(arr){
    let list = [...arr]
    //Simply test each list item with the item in front of it. If they contradict, remove both.
    for(let i = 0; i < list.length; i++){
    
      if(list[i] == "NORTH"){
        if(list[i+1] == "SOUTH"){
          list.splice(i, 2)
          i -= 2;
        }
      }
      
      if(list[i] == "SOUTH"){
        if(list[i+1] == "NORTH"){
          list.splice(i, 2)
          i -= 2;
        }
      }
      if(list[i] == "WEST"){
        if(list[i+1] == "EAST"){
          list.splice(i, 2)
          i -= 2;
        }
      }
      
      if(list[i] == "EAST"){
        if(list[i+1] == "WEST"){
          list.splice(i, 2)
          i -= 2;
        }
      }
    }
  
    return list;
  
  }

  //Where my anagrams at?
  //https://www.codewars.com/kata/523a86aa4230ebb5420001e1

  function anagrams(word, words) {
    let split = word.split("")
    let final = []
  
    for(let i = 0; i < words.length; i++){
  
      let test = words[i].split("")
      if(test.length == split.length){ //Words must be same length
        for(let j = 0; j < split.length; j++){
          if(test.includes(split[j])){ //Goes through every letter of split, whittles test down to 0 letters if it matches
            test.splice(test.indexOf(split[j]), 1)
          }
        }
  
        if(test.length == 0){ //if there are no letters left, it means every letter matched between the two and they are anagrams
          final.push(words[i])
        }
  
      }
    }
    
    return final
  
  }