const { greeting, sayPrint } = require("./modules");
const { readFile, writeFile } = require("fs/promises");

//modules
greeting();
sayPrint();

//file system
let template = readFile("./sample.html");

const data = {
  body: "hello world this is body",
};

//replace {body} element with value of data object and write file as new.html
for (const [key, value] of Object.entries(data)) {
  template
    .then((res) => {
      let template = res.toString().replace(`{${key}}`, value);
      return template;
    })
    .then((template) => writeFile("./new.html", template))
    .catch((err) => console.log(err));
}
