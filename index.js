const getLongestWord = (str) => {
  const words = str.split(/\s+/);

  let maxLength = "";
  let maxVowelCount = 0;

  words.forEach((word) => {
    const cleanWord = word.replace(/[^\w ]/g, "");
    const vowelCount = (cleanWord.match(/[aeiouAEIOU]/g) || []).length;

    if (cleanWord.length > maxLength.length) {
      maxLength = cleanWord;
      maxVowelCount = vowelCount;
    } else if (
      cleanWord.length === maxLength.length &&
      vowelCount > maxVowelCount
    ) {
      maxLength = cleanWord;
      maxVowelCount = vowelCount;
    }
  });

  return maxLength;
};

const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already have all the answers";

console.log(getLongestWord(sentence));
