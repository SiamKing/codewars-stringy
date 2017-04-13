function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    i % 2 ? str += '0' : str += '1';
  }
   return str;
}
