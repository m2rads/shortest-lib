import { AfterFunction, BeforeFunction, TestFunction } from './types';

export class UITestBuilder<T = void> {
    private testName: string;
    private testFn?: TestFunction;
    private beforeFn?: BeforeFunction;
    private afterFn?: AfterFunction;
    private expectations: any;
    private params?: T;
  
    constructor(name: string) {
      this.testName = name;
    }
  
    test(name: string): this {
      this.testName = name;
      return this;
    }
  
    before(fn: BeforeFunction): this {
      this.beforeFn = fn;
      return this;
    }
  
    given(params: T): this {
      this.params = params;
      return this;
    }
  
    expect(expectations: any): this {
      this.expectations = expectations;
      return this;
    }
  
    after(fn: AfterFunction): this {
      this.afterFn = fn;
      return this;
    }
}
  