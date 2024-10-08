function sumTriple(num1, num2){
    let sum = num1 + num2
    if(num1 == num2){
        sum *= 3;
    }
    return sum;
}

console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));