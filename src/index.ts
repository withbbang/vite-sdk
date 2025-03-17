import { getMethod } from './api';
import { add, subtract } from './operations';
import { setBanner } from './utils/banner';

export class Operations {
  private static instance: Operations;
  private value: string = '';

  private constructor(initialValues?: any) {
    setBanner();
    this.value = initialValues.value;
  }

  public static init(initialValues?: any): Operations {
    if (!Operations.instance) {
      Operations.instance = new Operations(initialValues);
    }

    return Operations.instance;
  }

  public add(a: number, b: number): number {
    return add(a, b);
  }

  public subtract(a: number, b: number): number {
    return subtract(a, b);
  }

  public getValue(): void {
    console.log('value: ', this.value);
  }

  public getMethodTest(): any {
    getMethod('https://jsonplaceholder.typicode.com/todos/1');
  }
}
