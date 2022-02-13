function even_or_odd(number) {
  if(typeof(number) != 'number'){
    return "This isn't number"
  } else if(number%2 == 0)
    return 'Even';
  else{
    return 'Odd';
  }
}