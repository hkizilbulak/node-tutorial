const path = require("path");

console.log(path);
console.log(`Sep »» ${path.sep}`);
console.log(`Delimiter »» ${path.delimiter}`);

const filePath = path.join("content", "subfolder", "test.txt");
//content/subfolder/text.txt
console.log(filePath);

const base = path.basename(filePath);
//text.txt
console.log(base);
//false
console.log(path.isAbsolute(base));
//content/subfolder/
console.log(path.dirname(filePath));

const absolute = path.join(__dirname, 'content', 'subfolder', 'test.txt')
// /Users/....../content/subfolder/test.txt
console.log(absolute);
//true
console.log(path.isAbsolute(absolute));
// /Users/....../content/subfolder/test.txt
console.log(path.dirname(absolute));