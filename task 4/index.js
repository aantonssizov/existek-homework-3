function writeArray(arr) {
    arr.forEach(element => {
        document.write(element.toString());
        document.write("<br/>");
    });
}

let arr = [
    new Array(5),
    new Array(5), 
    new Array(5), 
    new Array(5), 
    new Array(5),
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.random() < 0.5 ? -2 : 2;
    }
}

writeArray(arr);

document.write("<br/>");

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i != j) {
            continue;
        }
        arr[i][j] = Math.sign(arr[i][j]) == -1 ? 0 : 1;
    }
}

writeArray(arr);
