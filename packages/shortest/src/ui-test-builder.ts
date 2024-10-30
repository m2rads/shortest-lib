import { getConfig } from './index';
import { AfterFunction, BeforeFunction, TestFunction } from './types';

export class UITestBuilder<T = void> {
    private path: string;
    private testName: string;
    private testFn?: TestFunction;
    private beforeFn?: BeforeFunction;
    private afterFn?: AfterFunction;
    private expectations: any;
    private params?: T;
  
    constructor(path: string) {
      this.path = path;
      this.testName = '';
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
  
    private getUrl(): string {
      const config = getConfig();
      const baseUrl = config.baseUrl?.replace(/\/$/, '') || '';
      const path = this.path.startsWith('/') ? this.path : `/${this.path}`;
      return `${baseUrl}${path}`;
    }
}
  