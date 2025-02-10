import request from 'supertest';
import { APP_URL } from '../utils/constants';
import { response } from 'express';

const app = APP_URL;
let token = '';

beforeAll(async () => {
  const response = await request(app).post('/api/v1/auth/email/login').send({
    email: 'test1@example.com',
    password: 'string',
  });
  token = response.body.token;
});
describe('Profile management (/api/v1/users/{id})', () => {
  it('Change name user successfully', () => {
    return request(app)
      .patch('/api/v1/users/7')
      .send({
        email: 'test_1@test.com',
        password: '123456',
        firstName: 'Non2',
        lastName: 'QA2',
        role: {
          id: 2,
          name: 'User',
        },
        status: {
          id: 2,
          name: 'Inactive',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
  it('Delete successfully', () => {
    return request(app)
      .delete('/api/v1/users/7')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
