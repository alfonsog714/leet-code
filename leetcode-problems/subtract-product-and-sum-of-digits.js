var subtractProductAndSum = function(n) {
    n = n.toString().split('');
    let product = 1;
    let sum = 0;

    for (let i in n) {
        product = product * parseInt(n[i]);
        sum = sum + parseInt(n[i]);
    }

    return product - sum;
};
