# Assigment

---

How to run api test case

- Intsall project

  https://github.com/brocoders/nestjs-boilerplate/blob/main/docs/installing-and-running.md

- Command for test api

  ```bash
  npm run test:api
  ```

- Test case
  File test/api
  1. User registration
     - Register successfully
     - Register failed with exiting account
     - Register failed with null email
     - Register failed with null password
     - Register failed with null firstName
     - Register failed with null lastName
  2. User authentication
     - Authentication successfully
     - Authentication failed with not exiting account
     - Authentication failed with wrong password
     - Authentication failed with null email
     - Authentication failed with null password
     - Auth me successfully
  3. Profile management
     - Change name user successfully
     - Delete successfully

- Test result

  ![alt text][def]

  [def]: image.png
