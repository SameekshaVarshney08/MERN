const b=new Buffer.from('ABCDEFGH');
console.log(b.toString());
b.write('other');
console.log(b.toString());

