function toCamelCase(str){
  const separators = ['_','-'];
  if(str){
      return str.split(new RegExp(separators.join('|'))).join('').charAt(0).match(/[a-z]/) ? 
       str.split(new RegExp(separators.join('|'))).slice(0,1)+ str.split(new RegExp(separators.join('|'))).slice(1).map(item=>item[0].toUpperCase()+item.slice(1)).join('') :
       str.split(new RegExp(separators.join('|'))).map(item=>item[0].toUpperCase()+item.slice(1)).join('');
      ;
  }
  return '';
}