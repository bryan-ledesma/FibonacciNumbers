var fibonacci_numbers = function (n) {
    if (n==1) {
        return [0,1];
    }
    else {
        var a = fibonacci_numbers(n-1);
        a.push(a[a.length - 1] + a[a.length - 2]);
        return a;
    }
};

console.log(fibonacci_numbers(9));
