function first_half(str){
    if (str.length % 2 == 0){
        return str.substring(0, str.length/2)
    }
    else{
        return str;
    }
}
console.log(first_half("Python"));   
console.log(first_half("JavaScript")); 
console.log(first_half("PHP")); 