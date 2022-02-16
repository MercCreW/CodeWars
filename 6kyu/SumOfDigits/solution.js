function digital_root(n){
    return n<10? n: digital_root(String(n).split('').map(Number).reduce(function (sum,curr){return sum+curr},0));
}