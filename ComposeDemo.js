function removeSpaces(string){
    return string.split(" ").join(" ");
}

// console.log(removeSpaces('Hayat Jahangir Khan'));
 function repeatString(string){
    return string.repeat(3); // can also use string + string
 } 
 function convertToUpper(string){
  return string.toUpperCase();
 }
 
//  console.log(repeatString('Mohd Sulaiman wani'));
// console.log(convertToUpper('jahangir ahmad khan'));
const input= 'hayat jahangir khan tricolbal'
const output=convertToUpper(repeatString(removeSpaces(input)));
console.log(output);