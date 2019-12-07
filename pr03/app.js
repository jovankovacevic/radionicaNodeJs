//ugradjeni moduli:
const fs = require('fs'); // file system
const os = require('os'); // Operating system
const http = require('http'); // http serveri

// Custom modul
const cModule = require('./custom_modules/c-module');

// Third-party moduli
const _ = require('lodash');
_.

// OS module
console.log(os.userInfo());
console.log(os.hostname());

// Blocking IO
const data = fs.readFileSync('nodejs.txt');
console.log(JSON.parse(data));

// Non-blocking IO
fs.readFile('nodeJS.txt', (err, data) => {
    // callback fja - nestopirajuca
    if(err) {
        console.log("Greska!", err);
    }
    else {
        console.log(JSON.parse(data));
    }
})

console.log("hello world");
cModule.readFile();
console.log(cModule.addTwoNumbers(7,78));