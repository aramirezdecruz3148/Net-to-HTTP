const { createServer } = require('net');

const { parseHTTPPacket } = require('../utils/parseHTTPPacket');
const { makeResponse } = require('../utils/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHTTPPacket(data.toString());
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', 'hi', 'plain');
      console.log(res)
      sock.write(res);
      sock.end();
    }
  
  });
});

module.exports = {
  app
};
