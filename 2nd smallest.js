var a = [5, 23, -112, 6, 70, 70, -112], b = [];

// remove duplicates 
b = a.filter(function (item, pos) {
    return a.indexOf(item) == pos;
});

// sort
b.sort(function (a, b) {
    return a > b;
});

console.log(b[1]); // 2nd min:12
console.log(b[b.length-2]); // 2nd max:12