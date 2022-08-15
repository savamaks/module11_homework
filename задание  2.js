
function simpleNumber(n){
    if (n<1000){
        nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
    
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        };
        if (i===n) return console.log( 'простое число' );
        
        };
        
    };
    if (n>1000) return console.log( 'данные не верны' );
};

simpleNumber(31)