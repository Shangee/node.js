var fs = require('fs');

fs.appendFile('ukinode.txt', 'there are 15 students', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
