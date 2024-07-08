// 3 number input largeNumber who output

let num1 = 42;
let num2 = 78;
let num3 = 95;
if (num1 > num2 && num1 > num3) {
    largest = num1;
} else if (num2 > num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log('large number', largest);



// large number Array
const arrayNumber = [22, 23, 34, 15, 34, 233, 67, 56];

let largeNumber = arrayNumber[0];

for (let i = 0; i < arrayNumber.length; i++) {

    if (arrayNumber[i] > largeNumber) {

        largeNumber = arrayNumber[i];
    }

}
console.log('Array large number',largeNumber);