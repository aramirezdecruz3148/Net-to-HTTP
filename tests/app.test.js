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
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Red'));
      });
  });

  it('able to parse request and send response for GET /green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Green'));
      });
  });

  it('able to parse request and send response for GET /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Blue'));
      });
  });

  it('able to parse request and send response for JSON object', () => {
    return request(app)
      .get('/dog')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
          name: 'Pennie',
          age: 8,
          weight: 14
        });
      });
  });
});
