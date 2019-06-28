const { createServer } = require('net');

const app = createServer(sock => {
  sock.on('data', data => {
    console.log(data.toString());
  
  });
});

module.exports = {
  app
};
