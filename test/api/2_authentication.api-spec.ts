import request from 'supertest';
import { APP_URL } from '../utils/constants';
import { response } from 'express';

const app = APP_URL;
let token = '';

beforeAll(async () => {
  const response = await request(app).post('/api/v1/auth/email/login').send({
    email: 'test_1@test.com',
    password: '123456',
  });
  token = response.body.token;
});

describe('User authentication (/api/v1/auth/email/login)', () => {
  it('Authentication successfully', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_1@test.com',
        password: '123456',
      })
      .expect(200)
      .then((response) => {
        expect(response.body.user.firstName).toEqual('QA');
        expect(response.body.user.lastName).toEqual('Test');
      });
  });
  it('Authentication failed with not exiting account', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_400@test.com',
        password: '123456',
      })
      .expect(422);
  });
  it('Authentication failed with wrong password', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_1@test.com',
        password: '1234567890',
      })
      .expect(422);
  });
  it('Authentication failed with null email', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        password: '1234567890',
      })
      .expect(422);
  });
  it('Authentication failed with null password', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_1@test.com',
      })
      .expect(422);
  });
  it('Auth me successfully', () => {
    return request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then((response) => {
        expect(response.body.firstName).toEqual('QA');
        expect(response.body.lastName).toEqual('Test');
      });
  });
});
