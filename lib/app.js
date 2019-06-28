const { createServer } = require('net');

const { parseHTTPPacket } = require('../utils/parseHTTPPacket');
const { makeResponse } = require('../utils/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    console.log(data.toString());
  
  });
});

module.exports = {
  app
};
