function near_100(num1, num2){
    if(100 - num1 < 100 - num2){
        return num1;
    }
    else if(100 - num2 < 100 - num1){
        return num2;
    }
    else{
        return false;
    }
}
console.log(near_100(90, 89))
console.log(near_100(-90, -89))
console.log(near_100(90, 90))