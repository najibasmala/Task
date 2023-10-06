function findLongestWord(sentence) {
    //find words in sentence
    const words = sentence.split(/\s+/);
  
    //intialize longest word and number of voewls
    let longestWord = "";
    let maxVowelNumber = 0;
  //check ever word
    for (const word of words) {
      // Calculate the number of vowels in the current word
      const vowelNumber = (word.match(/[aeiouAEIOU]/g) || []).length;
  
      // Check if the current word is longer than the longest word found 
      if (word.length > longestWord.length) {
        longestWord = word;
        maxVowelNumber = vowelNumber;
      }
      // check if the current word has the same length as the longest word, check for more vowels
      else if (word.length === longestWord.length && vowelNumber > maxVowelNumber) {
        longestWord = word;
        maxVowelNumber = vowelNumber;
      }
    }
  
    return longestWord;
  }
  
  // test:
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";
  const stentece2=""
    const longestWordWithMostVowels = findLongestWord(sentence);
  console.log("Longest word with the most vowels:"+ longestWordWithMostVowels);
