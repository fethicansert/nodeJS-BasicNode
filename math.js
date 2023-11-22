const add = (a , b) => a + b;
const sub = (a , b) => a - b;
const mul = (a , b) => a * b;
const div = (a , b) => a / b;

module.exports = { add, sub , mul ,div }; // I don't need this module.export cause I used exports in declaring function at start





exports.add = (a , b) => a + b;
exports.sub = (a , b) => a - b;
exports.mul = (a , b) => a * b;
exports.div = (a , b) => a / b;

module.exports = { add, sub , mul ,div }; 