// כתבו פונקציה המקבלת מערך שמכיל בתוכו מערכים נוספים, ומחזירה מערך עם סכום האיברים של כל מערך פנימי
//  node jsאת המערך עם סכום האיברים הפנימיים היא מדפיסה לקונסול של 
var creatingArr = require('./external_arr');
var pushValuse = require('./arrays_value');
var sum = require('./arrays_sum');

console.log(`The new array is:\n ${sum.getSum(pushValuse.pushValuse(creatingArr.creatingArr()))}`)



