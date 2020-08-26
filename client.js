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
  conn.on('connect',()=>{
    console.log("Successfully connected to game server")
  })
  
  conn.on('connect', () => {
    conn.write("Name: AFR");
  });

  conn.on('connect', () => {
    conn.write("Move: up");
  });


 

  
// setTimeout(() => {
//   conn.on('connect', () => {
//     conn.write("Move: up");
//   });
// }, 100);

// setTimeout(() => {
//   conn.on('connect', () => {
//     conn.write("Move: up");
//   });
// }, 150);
  
  
  return conn;
}
connect().on('data',(data)=>{
  console.log(data);
})
module.exports = {connect};