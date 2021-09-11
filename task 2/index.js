function checkSign(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    }
}

function isPrime(num) {
    let sqrtNum = Math.round(Math.sqrt(num));

    for (let i = 2; i <= sqrtNum; i++) {
        if (i % 2 == 0 && i != 2) {
            continue;
        }

        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function isDividableBy(num, divider) {
    if (num % divider == 0) {
        console.log(`${num} is dividable by ${divider}`);
    } else {
        console.log(`${num} is not dividable by ${divider}`);
    }
}

function checkNumber(num) {
    checkSign(num);

    if (isPrime(num)) {
        console.log(`${num} is prime`);
    } else {
        console.log(`${num} is not prime`);
    }

    isDividableBy(num, 2);
    isDividableBy(num, 3);
    isDividableBy(num, 5);
    isDividableBy(num, 6);
    isDividableBy(num, 9);
}

checkNumber(2);
checkNumber(10);
checkNumber(17);
checkNumber(-100);