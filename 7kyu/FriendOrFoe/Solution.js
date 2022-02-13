function friend(friends){
  //your code here
  return friends.filter(function(el){
    if(el.length == 4){
      return el;
    }
  })
}