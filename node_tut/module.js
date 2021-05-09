// require will run the file on its own
const { people, ages } = require('./people');

console.log(people);
console.log(ages);

const os = require('os');
console.log(os.platform(), os.homedir());