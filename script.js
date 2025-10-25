function firstChar(text) {
 let newtext = text.trim(); 
  if (newtext.length > 0) {
    return newtext[0]; 
  } else {
    return ''; 
  }
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
