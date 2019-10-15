// צרו מערכת שיודעת לחפש שם בקובץ/מערך.
// המערכת תכיל את המודולים הבאים:

// textFileModuleמודול שיודע לקרוא קובץ, להחזיר לי את הנתונים כטקסט . תקראו לו 
// .strToArray מודול נוסף שמקבל נתונים כטקסט וממיר אותם למערך תקראו לו 
// מודול נוסף שיודע לקבל   מערך – ויודע לבדוק האם השם שנתתי לו נמצא כאחד מאיברי המערך. (אפשר  ב foreach) קראו לו findInArr
// לבסוף, אקבל תשובה האם השם נמצא בקובץ הסופי (שהומר למערך, ובעצם בדקנו את המערך)

var re = require('./textFileModule');
var convert = require('./strToArray');
var serch = require('./findInArr');

//input for input a word
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`enter a word for serch?  `, (name) => {
  // calling for all modules
  console.log(`Is the word ${name} in the file? --> ${serch.find(convert.change(re.getString('C:/FullStak/Presentations/hello.txt')), name)}`);
  readline.close()
})
