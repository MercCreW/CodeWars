function digitize(n) {
    //code here
    return String(n).split('').map(n=> Number(n)).reverse();
  }