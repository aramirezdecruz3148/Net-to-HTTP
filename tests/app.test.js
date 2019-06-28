const request = require('supertest');
const { app } = require('../lib/app');

describe('able to parse request and send response from server', () => {
  it('able to parse request', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });
});
