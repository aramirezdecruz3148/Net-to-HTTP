const { createServer } = require('net');

const { parseHTTPPacket } = require('../utils/parseHTTPPacket');
const { makeResponse } = require('../utils/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHTTPPacket(data);
    console.log(parsedData);
  
  });
});

module.exports = {
  app
};
