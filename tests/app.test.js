const request = require('supertest');
const { app } = require('../lib/app');

describe('able to parse request and send response from server', () => {
  it('able to parse request and send response for GET /', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });

  it('able to parse request and send response for POST /', () => {
    return request(app)
      .post('/')
      .then(res => {
        expect(res.status).toEqual(400);
        expect(res.text).toEqual(expect.stringContaining('sorry'));
      });
  });

  it('able to parse request and send response for GET /red', () => {
    return request(app)
      .post('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Red'));
      });
  });
});
