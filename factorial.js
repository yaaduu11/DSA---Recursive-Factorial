// TODO :     n ! = n * (n-1)!


//////////! FACTORIAL 
function factorial(n) {
    let fac = 1
    for(let i=2 ;i<= n; i++){
       fac *= i
    }
    return fac
}

console.log(factorial(3))
console.log(factorial(5))


//////////! FACTORIAL WITH RECURSION 
function recursiveFactorial(n){
    if(n==0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(5))