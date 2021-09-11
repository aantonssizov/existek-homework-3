function add(a, b) {
    let result = a + b;
    console.log(result);
}

function sub(a, b) {
    let result = a - b;
    console.log(result);
}

function mul(a, b) {
    let result = a * b;
    console.log(result);
}

function div(a, b) {
    if (b == 0) {
        console.error("Divide by 0");
        return;
    }
    let result = a / b;
    console.log(result);
}

add(1, 1);
sub(1, 1);
mul(2, 3);
div(4, 2);
div(1, 0);