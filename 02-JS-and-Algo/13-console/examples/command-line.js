console.log("Arguments",process.argv);

let arg = process.argv;
console.log(arg);
// the default is the location of current folder:
// Arguments [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\programming\\elevation-folder\\elevation\\02-JS-and-Algo\\13-console\\index.js'
// ]

const fname = process.argv[2];
const lname = process.argv[3];
console.log(arg);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\programming\\elevation-folder\\elevation\\02-JS-and-Algo\\13-console\\index.js',
//   'itai',
//   'glikman'
// ]

// Destructuring- familiar syntax to get straight the inputs from argv:
// const [,,fname,lname] = process.argv;

console.log(fname+lname);