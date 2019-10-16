// כתבו תוכנית המגרילה 2 מספרים אקראיים מ 1 עד 6 המדמים קוביות.
// אם 2 המספרים שהוגרלו  הינם זהים : הפלט יהיה lucky + המספר שיצא.
// אם 2 המספרים שהוגרלו שונים – הפלט יהיה : המספר הראשון הוא : +מספר1+ המספר השני הוא +מספר2

var dice1 = Math.ceil(Math.random() * 6);
var dice2 = Math.ceil(Math.random() * 6);
if (dice1==dice2) {
    console.log(`lucky day you get double ${dice2}`);
} else {
    console.log(`The result of thh first dice is:  ${dice1}\nThe result of thh second dice is:  ${dice2}`);
}