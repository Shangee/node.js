var fs = require('fs');

fs.writeFile('ukinode.txt', 'Hey Uki', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
