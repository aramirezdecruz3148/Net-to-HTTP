const { createServer } = require('net');

const app = createServer(sock => {
  sock.on('data', data => {
    // console.log(data.toString());
    const lines = data.toString().split('/n');
    const method = lines[0].split(' ')[0];
    const path = lines[0].split(' ')[1];
    console.log(method, path);
    //Buffer.from(lines.length)
  
  });
});

module.exports = {
  app
};
