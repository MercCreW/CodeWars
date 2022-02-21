function highAndLow(numbers){
  const max = Math.max.apply(null,  numbers.split(' ').map(item => +item));
  const min = Math.min.apply(null,  numbers.split(' ').map(item => +item));
  return `${max} ${min}`;
}