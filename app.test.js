const request = require('supertest');
const app = require('./app')

describe('アクセステスト', () => {
    test('ステータスコード 200', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})