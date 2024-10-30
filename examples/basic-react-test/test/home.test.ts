import { afterAll, beforeAll, define, UITestBuilder } from 'shortest';

interface CountState {
  countNumber: number;
}

define('Home page validation', () => {
  const countTest = new UITestBuilder<CountState>('/')
    .test('Count button interactions')
    .before('setupEnvironment', { clean: true })
    .before(async () => {
      // function setup
    })
    .given('initialState', { countNumber: 0 })
    .given({ countNumber: 0 })
    .when('clicked')
    .when('hovered', { duration: 1000 })
    .when({ countNumber: 1 })
    .expect('toBeVisible')
    .expect('toHaveCount', { value: 1 })
    .expect({ countNumber: 1 })
    .after('cleanup', { removeData: true })
    .after(async (response) => {
      // function cleanup
    });
});