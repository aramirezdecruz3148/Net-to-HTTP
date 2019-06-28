const { createServer } = require('net');
const { parseHTTPPacket } = require('../utils/parseHTTPPacket');
const { makeResponse } = require('../utils/makeResponse');
const { redVariable, greenVariable, blueVariable } = require('../utils/htmlVariables');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHTTPPacket(data.toString());
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', 'hi', 'text/plain');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'POST' && parsedData.path === '/') {
      const res = makeResponse('400 Bad Request', 'sorry', 'text/plain');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && parsedData.path === '/red') {
      const res = makeResponse('200 OK', redVariable, 'text/html');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && parsedData.path === '/green') {
      const res = makeResponse('200 OK', greenVariable, 'text/html');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && parsedData.path === '/blue') {
      const res = makeResponse('200 OK', blueVariable, 'text/html');
      sock.write(res);
      sock.end();
    }
  });
});

module.exports = {
  app
};
