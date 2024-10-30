import { afterAll, beforeAll, define, UITestBuilder } from 'shortest';

interface LoginParams {
  email: string;
  password: string;
}

const testUser = {
  email: 'test@example.com',
  password: 'password123',
  name: 'Test User'
};

define('Authentication Flow', () => {
  // Optional database or setup
  let db: any;  

  // Global setup
  beforeAll(async () => {
    // Setup test environment, e.g., database connection
  });

  // Global cleanup
  afterAll(async () => {
    // Cleanup after all tests
  });

  // Login test
  const loginTest = new UITestBuilder<LoginParams>('/home')
    .test('User can login with valid credentials')
    .before(async () => {
      // Setup specific to this test
      await db.users.create(testUser);
    })
    .given({
      email: testUser.email,
      password: testUser.password
    })
    .expect({
      success: true,
      user: {
        email: testUser.email,
        name: testUser.name
      }
    })
    .after(async (response) => {
      // Cleanup or store data for next tests
      await db.users.delete({ email: testUser.email });
    });
});