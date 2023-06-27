function somefn(ok, err) {
    if (ok) {
        console.log('ok');
    }
    if (err) {
        console.log('err');
    }
    const error = new Error('error');
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    const k = 10
    switch (k) {
        case 10:
            console.log(20);
            break;
    
        default:
            break;
    }
    let j = 0;
    while(j < 10) {
        console.log(j);
        j++;
    }

}


function somefn1(ok1, err1) {
    if (ok1) {
        console.log('ok');
    }
    if (err1) {
        console.log('err');
    }
    const error = new Error('error');
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    const k2 = 10
    switch (k2) {
        case 10:
            console.log(20);
            break;
    
        default:
            break;
    }
    let j1 = 0;
    while(j1 < 10) {
        console.log(j1);
        j1++;
    }
    
}