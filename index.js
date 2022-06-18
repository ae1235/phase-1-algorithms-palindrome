function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if (word=== reversedWord){
    return true
  }else {
    return false
  }
}

/* 
  Add your pseudocode here
  reverse the input string
  if the reversed string is the same as the input
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  make a function that returns true if a word is a palindrome and false if not.
  If a word is the same as in reverse return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  
}

module.exports = isPalindrome;
