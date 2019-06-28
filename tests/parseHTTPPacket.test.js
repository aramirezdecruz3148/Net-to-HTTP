const { parseHTTPPacket } = require('../utils/parseHTTPPacket');

describe('testing makeHTTPPacket', () => {
  it('returns both method and path', () => {
    const string = 'GET / ';
    const { method, path } = parseHTTPPacket(string);
    expect(method).toEqual('GET');
    expect(path).toEqual('/');
  });
});
