import { getMethod } from './api';
import { add, subtract } from './operations';
import { setBanner } from './utils/banner';

class Operations {
  private static instance: Operations;

  private constructor() {
    setBanner();
  }

  public static getInstance(): Operations {
    if (!Operations.instance) {
      Operations.instance = new Operations();
    }

    return Operations.instance;
  }

  public add(a: number, b: number): number {
    return add(a, b);
  }

  public subtract(a: number, b: number): number {
    return subtract(a, b);
  }

  public getMethodTest(): any {
    getMethod('https://jsonplaceholder.typicode.com/todos/1');
  }
}

export const OperationsSingleton = Operations.getInstance();
