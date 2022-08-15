function x(arr){
    let odd = 0;
    let even = 0;
    let zero = 0;
    
    const numberFilter = arr.filter(v =>typeof v ==='number' && !isNaN(v));
    
    const evenOdd = numberFilter.filter(v=>v!==0).map(v=>v%2===0?  even++ :  odd++);
    
    const numberZero = numberFilter.map(v=>v===0? zero++ : "");
    
    console.log(`колличество нечетных чисел ${odd}, колличество четных чисел ${even} колличество нулей ${zero}`);
    
}
    
x([0,1,2,3,5,44,7,NaN, false, true, 'fg'])