function spinWords(string){
  const wordsArray = string.split(" ")
  
  let flipped = wordsArray.map((word, indx, arr) => {
    if(word.length >= 5){
      return word.split("").reverse().join("")
    }else{
      return word
    }
  })
  
  return flipped.join(" ")
}
