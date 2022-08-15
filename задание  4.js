const cb = (a,b) => {
    
    if (a <=b) {
        
        console.log(a);
        
        a++;
        
        setTimeout(cb,1000,a++,b);
    }
};

setTimeout(cb, 1000, 5,9);