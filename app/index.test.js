const request = require('supertest');
const express = require('express');

const app = express();
app.get('/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

describe('GET /status', () => {
  it('should return status ok and a timestamp', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body).toHaveProperty('timestamp');
  });
});
