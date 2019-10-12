
exports.getString = (path) => {
  const fs = require('fs');
  return fs.readFileSync(path, 'utf8');
}

