import { TestSuite, BeforeAllFunction, AfterAllFunction } from './types';

export let currentSuite: TestSuite | null = null;
export const beforeAllFns: BeforeAllFunction[] = [];
export const afterAllFns: AfterAllFunction[] = [];

export function define(name: string, fn: () => void): void {
  currentSuite = {
    name,
    tests: []
  };

  fn();

  // Reset suite after execution
  currentSuite = null;
}

export function beforeAll(fn: BeforeAllFunction): void {
  if (currentSuite) {
    currentSuite.beforeAll = fn;
  } else {
    beforeAllFns.push(fn);
  }
}

export function afterAll(fn: AfterAllFunction): void {
  if (currentSuite) {
    currentSuite.afterAll = fn;
  } else {
    afterAllFns.push(fn);
  }
}

export { UITestBuilder } from './ui-test-builder';
export * from './types';