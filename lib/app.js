const { createServer } = require('net');

const app = createServer(sock => {
  console.log('server is up');
});

module.exports = {
  app
};
