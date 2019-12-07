const fs = require('fs');

module.exports.addTwoNumbers = (a, b) => {
    return a + b;
}

module.exports.readFile = () => {
    fs.readFile('nodeJS.txt', (err, data) => {
        if(err) {
            console.log("Greska!", err);
        }
        else {
            console.log(JSON.parse(data));
        }
    })
}