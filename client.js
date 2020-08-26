const net = require('net');
const stdin = process.stdin;


const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // This listener waits for keyboard input
  // and on enter .... something happens
  stdin.on('data', (input) => {
      conn.write(input);
  })
  
  return conn;
}
connect().on('data',(data)=>{
  console.log(data);
})
module.exports = connect;