// I needed return the factorial of paramater number

// Eu precisava retornar o fatorial do numero do parametro

function factorial(n){
    let finalResult = n;
    
    for(let index = 1; index < n; index++){
        finalResult = finalResult * index
    }
    
    return finalResult
}