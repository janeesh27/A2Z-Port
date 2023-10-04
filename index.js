function findLongestWord(sentence) {
  function countVowels(word) {
    return (word.match(/[aeiouAEIOU]/g) || []).length;
  }

  let longestWord = "";
  let maxLength = 0;
  let maxVowels = 0;

  const words = sentence.match(/[a-zA-Z]+/g);

  if (words) {
    words.forEach((word) => {
      const length = word.length;
      const vowels = countVowels(word);

      if (length > maxLength || (length === maxLength && vowels > maxVowels)) {
        longestWord = word;
        maxLength = length;
        maxVowels = vowels;
      }
    });
  }

  return longestWord;
}

const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

const longestWord = findLongestWord(sentence);
console.log(longestWord);
