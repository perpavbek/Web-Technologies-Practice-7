function max_of_three(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b > c){
        return b;
    }
    else if(c > a && c > b){
        return c;
    }
    else{
        return a;
    }
}
console.log(max_of_three(1,0,1)); 
console.log(max_of_three(0,-10,-20)); 
console.log(max_of_three(1000,510,440));