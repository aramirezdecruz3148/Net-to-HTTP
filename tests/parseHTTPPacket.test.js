const { parseHTTPPacket } = require('../utils/parseHTTPPacket');

describe('testing makeHTTPPacket', () => {
  it('returns both method(GET) and path(/)', () => {
    const string = 'GET / ';
    const { method, path } = parseHTTPPacket(string);
    expect(method).toEqual('GET');
    expect(path).toEqual('/');
  });

  it('returns both method(POST) and path(/)', () => {
    const string = 'POST / ';
    const { method, path } = parseHTTPPacket(string);
    expect(method).toEqual('POST');
    expect(path).toEqual('/');
  });
});
