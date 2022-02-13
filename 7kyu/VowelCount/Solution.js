function getCount(str) {
  var vowelsCount = str.match(/[a,e,i,o,u]/gi)? str.match(/[a,e,i,o,u]/gi).length : 0;
  
  return vowelsCount;
}