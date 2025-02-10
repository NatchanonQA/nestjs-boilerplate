import request from 'supertest';
import { APP_URL } from '../utils/constants';

describe('User registration (/api/v1/auth/email/register)', () => {
  const app = APP_URL;
  it('Register successfully', () => {
    return request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: 'test_1@test.com',
        password: '123456',
        firstName: 'QA',
        lastName: 'Test',
      })
      .expect(200);
  });
  it('Register failed with exiting account', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_1@test.com',
        password: '123456',
        firstName: 'QA',
        lastName: 'Test',
      })
      .expect(200);
  });
  it('Register failed with null email', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        password: '123456',
        firstName: 'QA',
        lastName: 'Test',
      })
      .expect(422);
  });
  it('Register failed with null password', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_4@test.com',
        firstName: 'QA',
        lastName: 'Test',
      })
      .expect(422);
  });
  it('Register failed with null firstName', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_4@test.com',
        password: '123456',
        lastName: 'Test',
      })
      .expect(422);
  });
  it('Register failed with null lastName', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({
        email: 'test_4@test.com',
        password: '123456',
        firstName: 'QA',
      })
      .expect(422);
  });
});
