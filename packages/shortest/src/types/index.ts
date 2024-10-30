export interface TestContext {
    testName: string;
}
  
export interface TestFunction {
    (context: TestContext): Promise<void> | void;
}
  
export interface BeforeAllFunction {
    (): Promise<void> | void;
}
  
export interface AfterAllFunction {
    (): Promise<void> | void;
}
  
export interface TestSuite {
    name: string;
    beforeAll?: BeforeAllFunction;
    afterAll?: AfterAllFunction;
    tests: TestContext[];
}

export interface BeforeFunction {
    (): Promise<void> | void;
}
  
export interface AfterFunction {
    (response: any): Promise<void> | void;
}