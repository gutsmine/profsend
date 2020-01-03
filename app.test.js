const request = require('supertest');
const app = require('./app')

describe('アクセステスト', () => {
  it('200 アクセス', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});