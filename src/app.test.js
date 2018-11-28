import supergoose, { startDB, stopDB } from './supergoose.js';

const { server } = require('./app.js');
const mockRequest = supergoose(server);

const url = '/';

// Jest Hooks
console.log(supergoose, 'this is super goose');

describe('api server', () => {
  it('should respond with a 500 on an invalid model', async () => {
    const response = await mockRequest.get('/booooo');

    expect(response.status).toBe(404);
  });

  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.post('/api/v1/foo/12');

    expect(response.status).toBe(404);
  });

  it('should respond properly on a get request to a valid model', async () => {
    const response = await mockRequest.get(url);
    expect(response.status).toBe(200);
  });
});
