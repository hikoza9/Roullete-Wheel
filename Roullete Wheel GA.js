var n = Math.round((Math.random() * 100) + 1);
var par;
if (n >= 0 && n <= 20) {
    par = "Parent 1";
}

if (n >= 21 && n <= 60) {
    par = "Parent 2";
}

if (n >= 61 && n <= 80) {
    par = "Parent 3";
}

if (n >= 81 && n <= 100) {
    par = "Parent 4";
}


console.log(par);