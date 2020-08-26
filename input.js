const {connect} = require('./play');
const stdin = process.stdin;

let connection;

const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data)=>{
    handleUserInput(data);
  })
  return stdin;
}

module.exports = {setupInput};
