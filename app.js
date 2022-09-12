const { createReadStream } = require("fs");

/*
    default 64kb
    highWaterMark - control size
    const fileStream = createReadStream("./content/big-file.txt", {highWaterMark: 90000});
    const fileStream = createReadStream("./content/big-file.txt", {encoding: 'utf-8'});

*/
const fileStream = createReadStream("./content/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

fileStream.on("data", (data) => {
  console.log(data);
});

fileStream.on("error", (err) => {
  console.log(err);
});
