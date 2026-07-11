const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../.next/server/vendor-chunks/next.js');
let src = fs.readFileSync(file, 'utf8');
const before = '(0, _react.cache)(';
const after = "(typeof _react.cache === 'function' ? (0, _react.cache) : (fn=>fn))(";
if (src.indexOf(before) === -1) {
  console.log('No occurrences found.');
  process.exit(0);
}
const replaced = src.split(before).join(after);
fs.writeFileSync(file, replaced, 'utf8');
console.log('Replaced occurrences in', file);
