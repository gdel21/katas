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