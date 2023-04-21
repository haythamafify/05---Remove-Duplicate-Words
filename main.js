// function remove_duplicate_words_from(sentence) {
//   let words = sentence.split(" ");
//   let emptyArray = [];
//   for (let index = 0; index < words.length; index++) {
//     if (emptyArray.indexOf(words[index]) === -1) {
//       emptyArray.push(words[index]);
//     }
//   }
//   return emptyArray.join(" ");
// }

// function remove_duplicate_words_from(sentence) {
//   let words = sentence.split(" ");
//   let newSet = new Set(words);
//   //   let arryFromSet = [...newSet]
//   let arryFromSet = Array.from(newSet);
//   return arryFromSet.join(" ");
// }
function remove_duplicate_words_from(sentence) {
  return [...new Set(sentence.split(" "))].join(" ");
}
// Testing Ouput
console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"));
// Hello Elzero Web Scho
